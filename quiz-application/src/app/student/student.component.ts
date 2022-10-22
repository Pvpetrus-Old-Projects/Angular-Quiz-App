import { Component, Input, OnInit } from '@angular/core';
import { StudentType } from '../types/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student!:StudentType;
  constructor() { }
  @Input() prefix!:string;
  @Input() isOdd!:boolean;
  @Input() isEven!:boolean;
  @Input() isClicked!:boolean;
  ngOnInit(): void {
  }
  doUnClick():void{
    this.isClicked=!this.isClicked;
  }
}
