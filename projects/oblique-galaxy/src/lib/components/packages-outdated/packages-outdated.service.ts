import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {Packages} from './packages.model';

@Injectable({
	providedIn: 'root'
})
export class PackagesOutdatedService {
	http = inject(HttpClient);

	getLocalPackages(): Observable<Packages[]> {
		return this.http.get<Record<string, {current: string; wanted: string; latest: string}>>('assets/outdated-report.json').pipe(
			map(data =>
				Object.keys(data).map(key => ({
					name: key,
					current: data[key].current,
					wanted: data[key].wanted,
					latest: data[key].latest
				}))
			)
		);
	}
}
