import { Component, OnInit } from '@angular/core';
import { TimerInfo } from 'src/shared/app.types';
import { CountDownSubjectsService } from '../count-down-subjects.service';

@Component({
  selector: 'app-input-counter-subjects',
  templateUrl: './input-counter-subjects.component.html',
  styleUrls: ['./input-counter-subjects.component.scss']
})
export class InputCounterSubjectsComponent implements OnInit {

  constructor(private countDownService:CountDownSubjectsService) { }
  public timerPauseList:number[] = [];
  public timer!: number;
  public timerInProgress = false;
  private startClicks:number = 0;
  private countIntervalRef:any;

  ngOnInit(): void {
  }

  public startTimer(): void{
    if(!this.timer){
      alert('Please enter timer value');
      return; 
    }

    this.timerInProgress = true;
    this.startClicks++;
    this.emitCounterInfo();
   this.countIntervalRef = setInterval(() => {
      this.calculateData();
    },1000)
  }

  public pauseTimer():void {
    clearInterval(this.countIntervalRef);
    this.timerPauseList.push(this.timer);
    this.timerInProgress = false;
    this.emitCounterInfo();
  }

  public resetTimer():void{
    this.timer = 0;
    this.timerPauseList = [];
    this.startClicks = 0;
    this.timerInProgress = false;
    clearInterval(this.countIntervalRef);
  }

  private calculateData(){
    this.timer = --this.timer;
    this.countDownService.count.next(this.timer);
    if(!this.timer){
      this.timerInProgress = false;
      clearInterval(this.countIntervalRef);
    }
  }

  private emitCounterInfo(){
    const date = new Date();
    const dateFormat = date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear() + " " + date.getHours()+':'+date.getMinutes()+':'+date.getSeconds() +" "+ (date.getHours() >= 12 ? 'pm' :'am') ;
    const info:TimerInfo = {
      pauseClicks:this.timerPauseList.length,
      startClicks:this.startClicks,
      info: (this.timerInProgress ? 'Started' : 'Paused') + ' at '+ dateFormat
    }
     this.countDownService.timerInfo.next(info);
  }

}
