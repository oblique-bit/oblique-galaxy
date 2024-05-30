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

	it('should turn 404 error into user-friendly error message', () => {
		const msg = 'Deliberate 404';

		service.getLocalPackages().subscribe(
			//eslint-disable-next-line @typescript-eslint/no-unused-vars
			packages => fail('expected to fail'),
			//eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			error => expect(error.message).toContain(msg)
		);

		const req = httpMock.expectOne('assets/outdated-report.json');

		req.flush(msg, {status: 404, statusText: 'Not Found'});
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

		service.getLocalPackages().subscribe(
			packages => {
				expect(packages).toEqual(expectedPackages);
				done();
			},
			error => done(error)
		);

		const req = httpMock.expectOne('assets/outdated-report.json');
		expect(req.request.method).toEqual('GET');

		req.flush(mockData);
	});

	afterEach(() => {
		httpMock.verify();
	});
});
