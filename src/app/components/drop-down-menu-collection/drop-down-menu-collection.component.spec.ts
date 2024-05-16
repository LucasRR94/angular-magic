import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownMenuCollectionComponent } from './drop-down-menu-collection.component';

describe('DropDownMenuCollectionComponent', () => {
  let component: DropDownMenuCollectionComponent;
  let fixture: ComponentFixture<DropDownMenuCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownMenuCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDownMenuCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
