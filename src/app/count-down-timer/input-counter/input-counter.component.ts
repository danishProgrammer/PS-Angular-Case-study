import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TimerInfo } from 'src/shared/app.types';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class InputCounterComponent implements OnInit {

  constructor() { }
  @Output() timerInfo = new EventEmitter<TimerInfo>();
  @Output() counter = new EventEmitter<number>();

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
    this.counter.emit(this.timer);
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
    this.timerInfo.emit(info);
  }

}
