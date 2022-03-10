import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimestampSubjectsComponent } from './counter-timestamp-subjects.component';

describe('CounterTimestampComponent', () => {
  let component: CounterTimestampSubjectsComponent;
  let fixture: ComponentFixture<CounterTimestampSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTimestampSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTimestampSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
