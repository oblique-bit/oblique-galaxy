import {AfterViewInit, Component, ElementRef, ViewChild, signal} from '@angular/core';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
	selector: 'obg-command',
	standalone: true,
	imports: [CdkCopyToClipboard, MatIcon, MatTooltip],
	templateUrl: './command.component.html',
	styleUrl: './command.component.scss'
})
export class CommandComponent implements AfterViewInit {
	readonly text = signal('');
	@ViewChild('code') private readonly code: ElementRef<HTMLElement> | undefined;

	ngAfterViewInit(): void {
		this.text.set(this.code?.nativeElement.innerText ?? '');
	}
}
