import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerWalletComponent } from './buyer-wallet.component';

describe('BuyerWalletComponent', () => {
  let component: BuyerWalletComponent;
  let fixture: ComponentFixture<BuyerWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
