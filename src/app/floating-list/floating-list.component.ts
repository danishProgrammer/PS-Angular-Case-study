import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-list',
  templateUrl: './floating-list.component.html',
  styleUrls: ['./floating-list.component.scss']
})
export class FloatingListComponent implements OnInit {

  constructor() { }
  totalLevels = Array(5).fill(5);
  ngOnInit(): void {

  }

}