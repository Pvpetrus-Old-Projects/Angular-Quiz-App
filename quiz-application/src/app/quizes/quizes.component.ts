import { Component, OnInit } from '@angular/core';
import { QuizType } from '../types/quiz';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  quizes:QuizType[]=[];
  whichClicked:number=-1;
  constructor() { 
    this.quizes.push({name:"Adam",surname:"Boro",index_nr:5435});
    this.quizes.push({name:"Basia",surname:"Arecka",index_nr:1123});
    this.quizes.push({name:"Aga",surname:"Serek",index_nr:6542});
  }

  ngOnInit(): void {
  }
  quizClicked(quiz:QuizType,index:number):void{
    console.log("quiz clicked",quiz);
    this.whichClicked=index;
  }

}
