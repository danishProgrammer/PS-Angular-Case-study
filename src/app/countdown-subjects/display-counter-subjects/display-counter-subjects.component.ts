import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountDownSubjectsService } from '../count-down-subjects.service';

@Component({
  selector: 'app-display-counter-subjects',
  templateUrl: './display-counter-subjects.component.html',
  styleUrls: ['./display-counter-subjects.component.scss']
})
export class DisplayCounterSubjectsComponent implements OnInit,OnDestroy {
  private timerSubscription:Subscription = new Subscription();
  public timer!:Number;

  constructor(private countDownService:CountDownSubjectsService) { }
  
  ngOnInit(): void {
   this.timerSubscription = this.countDownService.count.subscribe(timer => this.timer = timer)
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
