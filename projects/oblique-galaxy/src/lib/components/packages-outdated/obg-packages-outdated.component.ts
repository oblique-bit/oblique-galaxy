import {Component, OnInit, inject} from '@angular/core';
import {Packages} from './packages.model';
import {PackagesOutdatedService} from './packages-outdated.service';

@Component({
	selector: 'obg-packages-outdated',
	standalone: true,
	imports: [],
	templateUrl: './obg-packages-outdated.component.html',
	styleUrl: './obg-packages-outdated.component.scss'
})
export class ObgPackagesOutdatedComponent implements OnInit {
	packageStatus: Packages[] = [];
	packagesOutdatedService = inject(PackagesOutdatedService);

	ngOnInit(): void {
		this.packagesOutdatedService.getLocalPackages().subscribe(data => {
			this.packageStatus = data.map(localPackage => ({
				...localPackage
			}));
		});
	}
}
