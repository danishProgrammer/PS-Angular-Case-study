import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Student } from 'src/shared/app.types';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private _studentHeaders!:string[];
  private _students!:Student[];
  private _selectedHeader!:string;
  private _sortingOrderTimes!:number;
  
  public get StudentHeaders():string[]{
    return this._studentHeaders;
  }

  public get Students():Student[] {
    return this._students;
  } 

  constructor() { }

  ngOnInit(): void {
    this.initStudents();
    this._studentHeaders = Object.keys(this._students[0]);
  }

  public studentDetails(student:Student):string[]{
    return Object.values(student);
  }

  public sortStudentDetails(header:string) : void{
    if(!this._selectedHeader || this._selectedHeader !== header){
      this._selectedHeader = header;
      this._sortingOrderTimes = 1;
    }
    else
    {
      this._sortingOrderTimes = ++this._sortingOrderTimes;
    }
    switch(this._sortingOrderTimes){
      case 1:
        this._students = _.orderBy(this._students,[header],['asc']);
        break;
      case 2: 
      this._students = _.orderBy(this._students,[header],['desc']);
      break;
      default:
        this.initStudents();
    }
    
  }

  initStudents(){
    this._students = [
      {name:'Abhi',class:3,section:'A',sub1:55,sub2:65,sub3:80},
      {name:'Danish',class:5,section:'D',sub1:42,sub2:90,sub3:83},
      {name:'Sahil',class:2,section:'B',sub1:58,sub2:25,sub3:10},
      {name:'Himanshu',class:8,section:'E',sub1:32,sub2:5,sub3:33},
      {name:'Sid',class:10,section:'C',sub1:92,sub2:89,sub3:93},
      {name:'Roy',class:4,section:'E',sub1:12,sub2:78,sub3:70},
      {name:'John',class:1,section:'D',sub1:80,sub2:35,sub3:80},
    ]
    this._sortingOrderTimes = 0;
  }

}
