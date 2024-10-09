import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ObgPackagesOutdatedComponent} from './obg-packages-outdated.component';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {PackagesOutdatedService} from './packages-outdated.service';
import {of} from 'rxjs';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('ObgPackagesOutdatedComponent', () => {
	let component: ObgPackagesOutdatedComponent;
	let fixture: ComponentFixture<ObgPackagesOutdatedComponent>;
	let packagesOutdatedService: PackagesOutdatedService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ObgPackagesOutdatedComponent],
			providers: [PackagesOutdatedService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
		}).compileComponents();

		fixture = TestBed.createComponent(ObgPackagesOutdatedComponent);
		component = fixture.componentInstance;
		packagesOutdatedService = TestBed.inject(PackagesOutdatedService);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call getLocalPackages on init', () => {
		const getLocalPackagesSpy = jest.spyOn(packagesOutdatedService, 'getLocalPackages').mockImplementation(() => of([]));
		component.ngOnInit();
		expect(getLocalPackagesSpy).toHaveBeenCalled();
	});

	it('should update packageStatus on init', () => {
		const testPackages = [{name: 'test', current: '1.0.0', wanted: '1.0.0', latest: '1.0.0', versionDiff: 'equal'}];
		jest.spyOn(packagesOutdatedService, 'getLocalPackages').mockImplementation(() => of(testPackages));
		component.ngOnInit();
		expect(component.packageStatus).toEqual(testPackages);
	});
});
