import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCounterSubjectsComponent } from './display-counter-subjects.component';

describe('DisplayCounterComponent', () => {
  let component: DisplayCounterSubjectsComponent;
  let fixture: ComponentFixture<DisplayCounterSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCounterSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCounterSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
