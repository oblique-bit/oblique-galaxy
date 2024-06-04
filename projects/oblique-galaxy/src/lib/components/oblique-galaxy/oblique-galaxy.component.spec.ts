import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ObliqueGalaxyComponent} from './oblique-galaxy.component';

describe('SampleComponent', () => {
	let component: SampleComponent;
	let fixture: ComponentFixture<ObliqueGalaxyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SampleComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ObliqueGalaxyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
