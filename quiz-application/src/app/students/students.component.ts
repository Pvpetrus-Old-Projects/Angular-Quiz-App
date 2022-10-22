import { Component, OnInit } from '@angular/core';
import { StudentType } from '../types/student'; 
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:StudentType[]=[];
  whichClicked:number=-1;
  constructor() { 
    this.students.push({name:"Adam",surname:"Boro",index_nr:5435});
    this.students.push({name:"Basia",surname:"Arecka",index_nr:1123});
    this.students.push({name:"Aga",surname:"Serek",index_nr:6542});
  }

  ngOnInit(): void {
  }
  studentClicked(student:StudentType,index:number):void{
    console.log("student clicked",student);
    this.whichClicked=index;
  }
}
