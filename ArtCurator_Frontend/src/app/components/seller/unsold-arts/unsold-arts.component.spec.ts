import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsoldArtsComponent } from './unsold-arts.component';

describe('UnsoldArtsComponent', () => {
  let component: UnsoldArtsComponent;
  let fixture: ComponentFixture<UnsoldArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsoldArtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsoldArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
