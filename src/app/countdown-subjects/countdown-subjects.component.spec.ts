import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownSubjectsComponent } from './countdown-subjects.component';

describe('CountdownSubjectsComponent', () => {
  let component: CountdownSubjectsComponent;
  let fixture: ComponentFixture<CountdownSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
