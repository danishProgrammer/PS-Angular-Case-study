import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {

  constructor() { }
  @Input()contentNumber!:Number;

  ngOnInit(): void {
  }
  public fetchContentNumber() : void{
    alert('Clicked at this number '+this.contentNumber);
  }

}
