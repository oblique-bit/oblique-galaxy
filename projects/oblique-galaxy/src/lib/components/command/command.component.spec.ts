import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommandComponent} from './command.component';
import {ObIconModule} from '@oblique/oblique';

describe('CommandComponent', () => {
	let component: CommandComponent;
	let fixture: ComponentFixture<CommandComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CommandComponent, ObIconModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(CommandComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set text property to empty string if no content is projected', () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		fixture.nativeElement.innerHTML = `<obg-command></obg-command>`;
		fixture.detectChanges();
		expect(component.text()).toBe('');
	});
});
