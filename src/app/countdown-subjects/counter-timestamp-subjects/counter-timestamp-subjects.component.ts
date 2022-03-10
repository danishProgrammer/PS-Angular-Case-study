import { Component, OnInit } from '@angular/core';
import { TimerInfo } from 'src/shared/app.types';
import { CountDownSubjectsService } from '../count-down-subjects.service';

@Component({
  selector: 'app-counter-timestamp-subjects',
  templateUrl: './counter-timestamp-subjects.component.html',
  styleUrls: ['./counter-timestamp-subjects.component.scss']
})
export class CounterTimestampSubjectsComponent implements OnInit {
  public timestampInfo:string[] = []

  constructor(private countDownService:CountDownSubjectsService) { }

  ngOnInit(): void {
    this.countDownService.timerInfo.subscribe((timerInfo:TimerInfo) => {
      this.timestampInfo.push(timerInfo.info);
    })
  }

}
