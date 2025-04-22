import {Component, EventEmitter, OnInit, Output, input} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {of} from 'rxjs';

export interface GridData<T> {
	columnNames: string[];
	rowsData: {title: string; items: T[][]}[];
}

@Component({
	selector: 'obg-grid-drag-and-drop',
	templateUrl: './obg-grid-drag-and-drop.component.html',
	styleUrl: './obg-grid-drag-and-drop.component.scss',
	imports: [CdkDropListGroup, CdkDropList, CdkDrag],
	standalone: true
})
export class ObgGridDragAndDropComponent<T> implements OnInit {
	readonly gridData = input<GridData<T>>({columnNames: [], rowsData: []});
	readonly showGridHeader = input<boolean>(true);
	@Output() readonly gridDataChange = new EventEmitter<GridData<T>>();

	columns = 0;
	rows = 0;
	columnTitles: string[] = [];
	grid: T[][][] = [];
	// eslint-disable-next-line @typescript-eslint/no-deprecated
	protected readonly of = of;

	ngOnInit(): void {
		this.columns = this.gridData().columnNames.length;
		this.rows = this.gridData().rowsData.length;
		this.columnTitles = this.gridData().columnNames;
		this.grid = Array.from({length: this.rows}, () => Array.from({length: this.columns}, () => []));
	}

	getItemsByIndex(rowIndex: number, colIndex: number): T[] {
		// return this.gridData.rowsData[rowIndex]?.items[colIndex] || [];
		if (rowIndex >= 0 && rowIndex < this.gridData().rowsData.length && colIndex >= 0 && colIndex < this.gridData().rowsData[rowIndex].items.length) {
			return this.gridData().rowsData[rowIndex].items[colIndex];
		}
		return [];
	}

	drop(event: CdkDragDrop<T[]>): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
		}
		this.gridDataChange.emit(this.gridData());
	}
}
