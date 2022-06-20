import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCompareComponent } from './sales-compare.component';

describe('SalesCompareComponent', () => {
  let component: SalesCompareComponent;
  let fixture: ComponentFixture<SalesCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
