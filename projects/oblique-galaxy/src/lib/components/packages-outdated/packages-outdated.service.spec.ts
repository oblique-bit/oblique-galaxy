import {TestBed} from '@angular/core/testing';
import {PackagesOutdatedService} from './packages-outdated.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PackagesOutdatedService', () => {
	let service: PackagesOutdatedService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PackagesOutdatedService]
		});

		service = TestBed.inject(PackagesOutdatedService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should transform data correctly', done => {
		const mockData = {
			test1: {current: '1.0.0', wanted: '1.0.0', latest: '1.0.0'},
			test2: {current: '2.0.0', wanted: '2.0.0', latest: '2.0.0'}
		};

		const expectedPackages = [
			{name: 'test1', current: '1.0.0', wanted: '1.0.0', latest: '1.0.0'},
			{name: 'test2', current: '2.0.0', wanted: '2.0.0', latest: '2.0.0'}
		];

		service.getLocalPackages('mockPath').subscribe(
			packages => {
				expect(packages).toEqual(expectedPackages);
				done();
			},
			error => done(error)
		);

		const req = httpMock.expectOne('mockPath');
		expect(req.request.method).toEqual('GET');

		req.flush(mockData);
	});

	afterEach(() => {
		httpMock.verify();
	});
});
