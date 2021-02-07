import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSellerComponent } from './nav-seller.component';

describe('NavSellerComponent', () => {
  let component: NavSellerComponent;
  let fixture: ComponentFixture<NavSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
