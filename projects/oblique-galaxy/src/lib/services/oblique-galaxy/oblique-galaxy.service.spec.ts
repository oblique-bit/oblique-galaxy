import {TestBed} from '@angular/core/testing';

import {ObliqueGalaxyService} from './oblique-galaxy.service';

describe('ObliqueGalaxyService', () => {
	let service: ObliqueGalaxyService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ObliqueGalaxyService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
