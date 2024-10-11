import {Injectable, RendererFactory2, inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {CollectorConfiguration, CollectorDefaultValues, CollectorFunction} from './collector.model';

@Injectable()
export class CollectorService {
	private readonly renderer = inject(RendererFactory2).createRenderer(null, null);
	private readonly document = inject(DOCUMENT);
	private readonly dialog = inject(MatDialog);
	private openCollectorDialog: CollectorFunction | undefined;
	private defaultValuesInternal: CollectorDefaultValues = {};
	private fallbackDialogInternal: ComponentType<unknown> | undefined;

	set defaultValues(values: CollectorDefaultValues) {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		this.defaultValuesInternal = values ?? {};
	}

	set fallbackDialog(component: ComponentType<unknown>) {
		this.fallbackDialogInternal = component;
	}

	initializeCollector(collectorId: string): void {
		this.addCollectorScript(collectorId);
		window.ATL_JQ_PAGE_PROPS = this.configureCollector();
	}

	collect(): void {
		if (this.openCollectorDialog) {
			this.updateCollectorFields();
			this.openCollectorDialog();
		} else {
			//@ts-expect-error @typescript-eslint/ban-ts-comment
			this.dialog.open(this.fallbackDialogInternal);
		}
	}

	private addCollectorScript(collectorId: string): void {
		const script = this.renderer.createElement('script') as HTMLScriptElement;
		script.src = `https://jira.bit.admin.ch/plugins/servlet/issueCollectorBootstrap.js?collectorId=${collectorId}&locale=en_US`;
		this.renderer.appendChild(this.document.body, script);
	}

	private configureCollector(): CollectorConfiguration {
		return {
			triggerFunction: (showCollectorDialog: CollectorFunction) => {
				this.openCollectorDialog = showCollectorDialog;
			},
			fieldValues: () => ({})
		};
	}

	private updateCollectorFields(): void {
		Object.keys(this.defaultValuesInternal).forEach(key => {
			//@ts-expect-error @typescript-eslint/ban-ts-comment
			window.ATL_JQ_PAGE_PROPS.fieldValues[key] = this.defaultValuesInternal[key]();
		});
	}
}
