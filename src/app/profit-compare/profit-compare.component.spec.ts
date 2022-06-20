import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitCompareComponent } from './profit-compare.component';

describe('ProfitCompareComponent', () => {
  let component: ProfitCompareComponent;
  let fixture: ComponentFixture<ProfitCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
