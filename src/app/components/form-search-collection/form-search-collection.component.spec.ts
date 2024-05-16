import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchCollectionComponent } from './form-search-collection.component';

describe('FormSearchCollectionComponent', () => {
  let component: FormSearchCollectionComponent;
  let fixture: ComponentFixture<FormSearchCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSearchCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSearchCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
