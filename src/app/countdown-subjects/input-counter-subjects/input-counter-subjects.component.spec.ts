import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCounterSubjectsComponent } from './input-counter-subjects.component';

describe('InputCounterComponent', () => {
  let component: InputCounterSubjectsComponent;
  let fixture: ComponentFixture<InputCounterSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCounterSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCounterSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
