import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ObgObliqueGalaxyComponent} from './obg-oblique-galaxy.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ObliqueModule} from '@oblique/oblique';

describe('ObliqueGalaxyComponent', () => {
	let component: ObgObliqueGalaxyComponent;
	let fixture: ComponentFixture<ObgObliqueGalaxyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BrowserAnimationsModule, MatButtonModule, ObliqueModule],
			providers: [provideHttpClient(withInterceptorsFromDi())]
		}).compileComponents();

		fixture = TestBed.createComponent(ObgObliqueGalaxyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render the "oblique-galaxy works!" text', () => {
		const compiled = fixture.nativeElement as HTMLElement | null;
		expect(compiled?.querySelector('p')?.textContent).toContain('oblique-galaxy works!');
	});

	it('should render the primary button', () => {
		const compiled = fixture.nativeElement as HTMLElement | null;
		const primaryButton = compiled?.querySelector('button[obButton="primary"]');
		expect(primaryButton).toBeTruthy();
		expect(primaryButton?.textContent).toContain('Primary');
	});

	it('should render the secondary button', () => {
		const compiled = fixture.nativeElement as HTMLElement | null;
		const secondaryButton = compiled?.querySelector('button[obButton="secondary"]');
		expect(secondaryButton).toBeTruthy();
		expect(secondaryButton?.textContent).toContain('Secondary');
	});

	it('should render the tertiary button', () => {
		const compiled = fixture.nativeElement as HTMLElement | null;
		const tertiaryButton = compiled?.querySelector('button[obButton="tertiary"]');
		expect(tertiaryButton).toBeTruthy();
		expect(tertiaryButton?.textContent).toContain('Tertiary');
	});
});
