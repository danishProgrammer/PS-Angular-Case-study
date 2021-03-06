import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/shared/app.types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category!:Category;
  constructor() { }

  ngOnInit(): void {
  }

}
