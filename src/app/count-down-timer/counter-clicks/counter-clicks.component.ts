import { Component, Input, OnInit } from '@angular/core';
import { CounterClicks } from 'src/shared/app.types';

@Component({
  selector: 'app-counter-clicks',
  templateUrl: './counter-clicks.component.html',
  styleUrls: ['./counter-clicks.component.scss']
})
export class CounterClicksComponent implements OnInit {

  constructor() { }
  @Input() counterClicks!: CounterClicks;
  ngOnInit(): void {
  }

}
