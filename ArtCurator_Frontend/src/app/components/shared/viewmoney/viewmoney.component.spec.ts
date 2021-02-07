import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoneyComponent } from './viewmoney.component';

describe('ViewmoneyComponent', () => {
  let component: ViewmoneyComponent;
  let fixture: ComponentFixture<ViewmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
