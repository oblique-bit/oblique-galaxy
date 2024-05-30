import {ApplicationConfig, LOCALE_ID, importProvidersFrom, isDevMode} from '@angular/core';
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
import {ServiceWorkerModule, provideServiceWorker} from '@angular/service-worker';
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
	providers: [
    importProvidersFrom(AppRoutingModule, BrowserModule, MatButtonModule, MatCardModule, MatIconModule, ObButtonModule, TranslateModule.forRoot(multiTranslateLoader()), ObExternalLinkModule, ObIconModule.forRoot(), ObMasterLayoutModule, ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
    })),
    { provide: LOCALE_ID, useValue: 'de-CH' },
    { provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true },
    { provide: OB_BANNER, useValue: environment.banner },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};
