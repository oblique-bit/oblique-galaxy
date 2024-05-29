import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ObgPackagesOutdatedComponent} from './obg-packages-outdated.component';

describe('PackagesOutdatedComponent', () => {
	let component: ObgPackagesOutdatedComponent;
	let fixture: ComponentFixture<ObgPackagesOutdatedComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ObgPackagesOutdatedComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ObgPackagesOutdatedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
