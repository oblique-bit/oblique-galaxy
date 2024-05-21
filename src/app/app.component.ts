import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {ObMasterLayoutModule} from '@oblique/oblique';
import {MatIconModule} from '@angular/material/icon';

@Component({
	selector: 'pwa-app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	standalone: true,
	imports: [ObMasterLayoutModule, TranslateModule, MatIconModule]
})
export class AppComponent {
	title = 'ObliqueGalaxy';
}
