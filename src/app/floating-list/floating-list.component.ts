import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-list',
  templateUrl: './floating-list.component.html',
  styleUrls: ['./floating-list.component.scss'],
  animations:[
    trigger('animateText',[
      state('left',style({
        transform:'translateX(0)'
      })),
      state('right',style({
        transform:'translateX(10vw)'
      })),
      transition('left <=> right',animate(800)),
    ])
  ]
})
export class FloatingListComponent implements OnInit,OnDestroy {

  constructor() { }
  public floatingTextState = 'left';
  private interval:any;
  ngOnInit(): void {
   this.interval = setInterval(() => {
      this.floatingTextState = this.floatingTextState == 'left' ? 'right' : 'left';
    },1000)

  }

  ngOnDestroy(): void {
    console.log('checking',this.floatingTextState);
    clearInterval(this.interval);
  }

}