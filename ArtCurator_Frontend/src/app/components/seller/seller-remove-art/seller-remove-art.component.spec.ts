import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRemoveArtComponent } from './seller-remove-art.component';

describe('SellerRemoveArtComponent', () => {
  let component: SellerRemoveArtComponent;
  let fixture: ComponentFixture<SellerRemoveArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRemoveArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRemoveArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
