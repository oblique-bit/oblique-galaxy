import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GridData, ObgGridDragAndDropComponent} from './obg-grid-drag-and-drop.component';
import {CdkDrag, CdkDragDrop, CdkDropList} from '@angular/cdk/drag-drop';

const mockGridData: GridData<string> = {
	columnNames: ['Column 1', 'Column 2'],
	rowsData: [
		{
			title: 'Row 1',
			items: [
				['Item 1', 'Item 2'],
				['Item 3', 'Item 4']
			]
		},
		{
			title: 'Row 2',
			items: [
				['Item 5', 'Item 6'],
				['Item 7', 'Item 8']
			]
		}
	]
};

describe('ObgGridDragAndDropComponent', () => {
	let component: ObgGridDragAndDropComponent<string>;
	let fixture: ComponentFixture<ObgGridDragAndDropComponent<string>>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ObgGridDragAndDropComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ObgGridDragAndDropComponent<string>);
		const writableGridData = component.gridData as unknown as import('@angular/core').WritableSignal<GridData<string>>;
		writableGridData.set(mockGridData);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize grid data correctly', () => {
		expect(component.columns).toBe(2);
		expect(component.rows).toBe(2);
		expect(component.columnTitles).toEqual(['Column 1', 'Column 2']);
		expect(component.grid.length).toBe(2);
	});

	it('should get items by index correctly', () => {
		expect(component.getItemsByIndex(0, 0)).toEqual(['Item 1', 'Item 2']);
		expect(component.getItemsByIndex(1, 1)).toEqual(['Item 7', 'Item 8']);
	});

	it('should handle drop event within the same container', () => {
		const event: CdkDragDrop<string[]> = {
			previousContainer: {data: ['Item 1', 'Item 2'], id: 'cdk-drop-list-0'} as CdkDropList<string[]>,
			container: {data: ['Item 1', 'Item 2'], id: 'cdk-drop-list-0'} as CdkDropList<string[]>,
			previousIndex: 0,
			currentIndex: 1,
			item: {} as CdkDrag<string>,
			isPointerOverContainer: true,
			// eslint-disable-next-line id-length
			distance: {x: 0, y: 0},
			// eslint-disable-next-line id-length
			dropPoint: {x: 0, y: 0},
			event: new MouseEvent('drop')
		};
		component.drop(event);
		expect(component.gridData().rowsData[0].items[0]).toEqual(['Item 1', 'Item 2']);
	});

	it('should emit gridDataChange event on drop', () => {
		jest.spyOn(component.gridDataChange, 'emit');
		const event: CdkDragDrop<string[]> = {
			previousContainer: {data: ['Item 1', 'Item 2'], id: 'cdk-drop-list-0'} as CdkDropList<string[]>,
			container: {data: ['Item 1', 'Item 2'], id: 'cdk-drop-list-0'} as CdkDropList<string[]>,
			previousIndex: 0,
			currentIndex: 1,
			item: {} as CdkDrag<string>,
			isPointerOverContainer: true,
			// eslint-disable-next-line id-length
			distance: {x: 0, y: 0},
			// eslint-disable-next-line id-length
			dropPoint: {x: 0, y: 0},
			event: new MouseEvent('drop')
		};
		component.drop(event);
		expect(component.gridDataChange.emit).toHaveBeenCalledWith(component.gridData);
	});
});
