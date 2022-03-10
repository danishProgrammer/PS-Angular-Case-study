import { Component, OnInit } from '@angular/core';
import { CounterClicks, TimerInfo } from 'src/shared/app.types';
import { CountDownSubjectsService } from '../count-down-subjects.service';

@Component({
  selector: 'app-counter-clicks-subjects',
  templateUrl: './counter-clicks-subjects.component.html',
  styleUrls: ['./counter-clicks-subjects.component.scss']
})
export class CounterClicksSubjectsComponent implements OnInit {

  constructor(private countDownService:CountDownSubjectsService) { }
  public counterClicks!: CounterClicks;
  ngOnInit(): void {
    this.countDownService.timerInfo.subscribe((info:TimerInfo) => {
      this.counterClicks = {
        startClicks:info.startClicks,
        pauseClicks:info.pauseClicks
      }
    })
  }

}
