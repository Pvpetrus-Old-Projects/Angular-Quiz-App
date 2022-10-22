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
    this.quizes.push({category:"Zwierzęta",question:"Ile gatunków zwierząt jest na świecie?",answers:["a.","b.","c.","d."],right_answer_index:0});
    this.quizes.push({category:"Natura",question:"Ile różnych gatunków grzybów jadalnych jest w Polsce?",answers:["a.","b.","c.","d."],right_answer_index:0});
    this.quizes.push({category:"Polityka",question:"Jak ma na imię sławny polityk o nazwisku Korwin Mikke?",answers:["a.","b.","c.","d."],right_answer_index:0});
  }

  ngOnInit(): void {
  }

}
