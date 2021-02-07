import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddArtComponent } from './seller-add-art.component';

describe('SellerAddArtComponent', () => {
  let component: SellerAddArtComponent;
  let fixture: ComponentFixture<SellerAddArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAddArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
