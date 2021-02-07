import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldArtsComponent } from './sold-arts.component';

describe('SoldArtsComponent', () => {
  let component: SoldArtsComponent;
  let fixture: ComponentFixture<SoldArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldArtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
