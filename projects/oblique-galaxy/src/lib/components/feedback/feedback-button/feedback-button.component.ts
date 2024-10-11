import {Component, OnInit, inject} from '@angular/core';
import {FeedbackFormComponent} from '../feedback-form/feedback-form.component';
import {CollectorService} from '../collector/collector.service';

@Component({
	selector: 'obg-feedback-button',
	standalone: true,
	providers: [CollectorService],
	templateUrl: './feedback-button.component.html',
	styleUrl: './feedback-button.component.scss'
})
export class FeedbackButtonComponent implements OnInit {
	private readonly collectorService = inject(CollectorService);

	ngOnInit(): void {
		this.collectorService.initializeCollector('6dfd32b3');
		// eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
		this.collectorService.defaultValues = {customfield_12505: () => window.location.href};
		this.collectorService.fallbackDialog = FeedbackFormComponent;
	}

	collectFeedback(): void {
		this.collectorService.collect();
	}
}
