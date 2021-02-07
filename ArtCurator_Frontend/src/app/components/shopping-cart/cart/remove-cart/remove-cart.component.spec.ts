import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCartComponent } from './remove-cart.component';

describe('RemoveCartComponent', () => {
  let component: RemoveCartComponent;
  let fixture: ComponentFixture<RemoveCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
