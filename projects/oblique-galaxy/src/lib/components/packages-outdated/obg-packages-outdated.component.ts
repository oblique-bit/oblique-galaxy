import {Component, Input, OnInit, inject} from '@angular/core';
import {Packages} from './packages.model';
import {PackagesOutdatedService} from './packages-outdated.service';
import {NgClass} from '@angular/common';

@Component({
	selector: 'obg-packages-outdated',
	standalone: true,
	imports: [NgClass],
	templateUrl: './obg-packages-outdated.component.html',
	styleUrl: './obg-packages-outdated.component.scss'
})
export class ObgPackagesOutdatedComponent implements OnInit {
	@Input() defaultPath = 'assets/outdated-report.json';
	packageStatus: Packages[] = [];
	packagesOutdatedService = inject(PackagesOutdatedService);

	ngOnInit(): void {
		this.packagesOutdatedService.getLocalPackages(this.defaultPath).subscribe(data => {
			this.packageStatus = data.map(localPackage => ({
				...localPackage
			}));
		});
	}
}
