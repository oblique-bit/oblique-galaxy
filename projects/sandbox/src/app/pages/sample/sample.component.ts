import {Component, OnInit} from '@angular/core';
import {ObColumnLayoutModule, ObNavTreeComponent, ObNavTreeItemModel} from '@oblique/oblique'; // import {ObgPackagesOutdatedComponent} from 'oblique-galaxy';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {ObgPackagesOutdatedComponent} from '../../../../../oblique-galaxy/src/lib/components/packages-outdated/obg-packages-outdated.component';

@Component({
	selector: 'app-sample',
	standalone: true,
	imports: [ObColumnLayoutModule, ObNavTreeComponent, ObgPackagesOutdatedComponent, MatTabGroup, MatTab],
	templateUrl: './sample.component.html',
	styleUrl: './sample.component.scss'
})
export class SampleComponent implements OnInit {
	items: ObNavTreeItemModel[] = [];
	private readonly tree = {
		label: 'Navigation Tree',
		items: [
			{
				id: 'tree-item-1',
				label: 'Package Outdated'
			},
			{
				id: 'tree-item-2',
				label: 'example 2'
			}
		]
	};

	ngOnInit(): void {
		this.items = this.tree.items.map(item => new ObNavTreeItemModel(item));
	}
}
