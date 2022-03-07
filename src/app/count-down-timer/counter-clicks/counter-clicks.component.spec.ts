import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterClicksComponent } from './counter-clicks.component';

describe('CounterClicksComponent', () => {
  let component: CounterClicksComponent;
  let fixture: ComponentFixture<CounterClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
