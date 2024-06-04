import {ApplicationConfig, LOCALE_ID, importProvidersFrom} from '@angular/core';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {
	OB_BANNER,
	ObButtonModule,
	ObExternalLinkModule,
	ObHttpApiInterceptor,
	ObIconModule,
	ObMasterLayoutConfig,
	ObMasterLayoutModule,
	multiTranslateLoader
} from '@oblique/oblique';
import {registerLocaleData} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {provideAnimations} from '@angular/platform-browser/animations';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

const masterLayoutConfig = new ObMasterLayoutConfig();
masterLayoutConfig.header.isSmall = true;
masterLayoutConfig.header.isSticky = true;
masterLayoutConfig.footer.isSticky = true;

export const appConfig: ApplicationConfig = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	providers: [
		importProvidersFrom(
			AppRoutingModule,
			BrowserModule,
			MatButtonModule,
			MatCardModule,
			MatIconModule,
			ObButtonModule,
			TranslateModule.forRoot(multiTranslateLoader()),
			ObExternalLinkModule,
			ObIconModule.forRoot(),
			ObMasterLayoutModule
		),
		{provide: LOCALE_ID, useValue: 'de-CH'},
		{provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true},
		{provide: OB_BANNER, useValue: environment.banner},
		provideAnimations(),
		provideHttpClient(withInterceptorsFromDi())
	]
};
