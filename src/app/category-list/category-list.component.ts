import { Component, OnInit } from '@angular/core';
import { Category } from 'src/shared/app.types';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public categories:Category[] = Array(40).fill(40);

}
