import {AfterViewInit, Component, ElementRef, signal, viewChild} from '@angular/core';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
	selector: 'obg-command',
	standalone: true,
	imports: [CdkCopyToClipboard, MatIcon, MatTooltip, MatIconModule],
	providers: [],
	templateUrl: './command.component.html',
	styleUrl: './command.component.scss'
})
export class CommandComponent implements AfterViewInit {
	readonly text = signal('');
	private readonly code = viewChild<ElementRef<HTMLElement> | undefined>('code');

	ngAfterViewInit(): void {
		this.text.set(this.code()?.nativeElement.innerText ?? '');
	}
}
