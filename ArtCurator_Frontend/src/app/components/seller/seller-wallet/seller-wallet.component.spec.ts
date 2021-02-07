import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWalletComponent } from './seller-wallet.component';

describe('SellerWalletComponent', () => {
  let component: SellerWalletComponent;
  let fixture: ComponentFixture<SellerWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
