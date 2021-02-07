import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinfoComponent } from './myinfo.component';

describe('MyinfoComponent', () => {
  let component: MyinfoComponent;
  let fixture: ComponentFixture<MyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
