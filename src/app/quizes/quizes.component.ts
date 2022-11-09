import { Component, OnInit } from '@angular/core';
import { QuizClass, QuizType } from '../types/quiz';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  quizes:QuizClass[]=[];
  whichClicked:number=-1;
  constructor() {
    this.quizes.push(new QuizClass("Zwierzęta","Ile gatunków zwierząt jest na świecie?",["a.","b.","c.","d."],0));
    this.quizes.push(new QuizClass("Natura","Ile różnych gatunków grzybów jadalnych jest w Polsce?",["a.","b.","c.","d."],0));
    this.quizes.push(new QuizClass("Polityka","Jak ma na imię sławny polityk o nazwisku Korwin Mikke?",["a.","b.","c.","d."],0));
  }

  ngOnInit(): void {
  }

}
