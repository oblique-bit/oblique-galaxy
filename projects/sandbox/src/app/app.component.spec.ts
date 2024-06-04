import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ObIconModule, ObMockTranslatePipe, ObMockTranslateService} from '@oblique/oblique';
import {MatIconModule} from '@angular/material/icon';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, ObMockTranslatePipe, AppComponent, MatIconModule, ObIconModule.forRoot()],
			providers: [{provide: TranslateService, useClass: ObMockTranslateService}],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'galaxyaApp'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('ObliqueGalaxy');
	});
});
