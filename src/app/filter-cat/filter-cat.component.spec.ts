import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCatComponent } from './filter-cat.component';

describe('FilterCatComponent', () => {
  let component: FilterCatComponent;
  let fixture: ComponentFixture<FilterCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
