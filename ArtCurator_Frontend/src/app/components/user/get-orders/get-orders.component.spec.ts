import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrdersComponent } from './get-orders.component';

describe('GetOrdersComponent', () => {
  let component: GetOrdersComponent;
  let fixture: ComponentFixture<GetOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
