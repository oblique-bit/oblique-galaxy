import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliqueGalaxyComponent } from './oblique-galaxy.component';

describe('ObliqueGalaxyComponent', () => {
  let component: ObliqueGalaxyComponent;
  let fixture: ComponentFixture<ObliqueGalaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObliqueGalaxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObliqueGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
