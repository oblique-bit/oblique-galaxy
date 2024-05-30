import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ObMasterLayoutModule, ObMockTranslatePipe, ObMockTranslateService} from '@oblique/oblique';
import {TranslateService} from '@ngx-translate/core';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeComponent, RouterTestingModule, ObMockTranslatePipe, ObMasterLayoutModule],
			providers: [{provide: TranslateService, useClass: ObMockTranslateService}],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
