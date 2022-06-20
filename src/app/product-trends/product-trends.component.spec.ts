import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrendsComponent } from './product-trends.component';

describe('ProductTrendsComponent', () => {
  let component: ProductTrendsComponent;
  let fixture: ComponentFixture<ProductTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
