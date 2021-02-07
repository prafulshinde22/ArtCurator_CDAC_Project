import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcarouselComponent } from './newcarousel.component';

describe('NewcarouselComponent', () => {
  let component: NewcarouselComponent;
  let fixture: ComponentFixture<NewcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
