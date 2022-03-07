import { Component, OnInit } from '@angular/core';
import { CounterClicks, TimerInfo } from 'src/shared/app.types';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {

  constructor() { }
  public displayCounter!:number;
  public timestampInfo:string[] = [];
  public counterClicks!:CounterClicks;

  ngOnInit(): void {
  }

  public getTimerInfo(timerInfo:TimerInfo):void{
    this.counterClicks = {
      startClicks:timerInfo.startClicks,
      pauseClicks:timerInfo.pauseClicks
    }
    console.log(this.counterClicks);
    this.timestampInfo.push(timerInfo.info);
  }
}
