import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingListComponent } from './floating-list.component';

describe('FloatingListComponent', () => {
  let component: FloatingListComponent;
  let fixture: ComponentFixture<FloatingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
