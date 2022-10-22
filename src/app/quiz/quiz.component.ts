import { Component, Input, OnInit } from '@angular/core';
import { QuizType } from '../types/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() quiz!:QuizType;
  constructor() { }
  @Input() isOdd!:boolean;
  @Input() isEven!:boolean;
  answered!:boolean;
  input_answer:number=-1;
  isAnswerRight:boolean=false;
  ngOnInit(): void {

  }
  onClick():void{
    if(this.input_answer!=-1)
    {
      this.answered=true;
      if(this.input_answer==this.quiz.right_answer_index)
      {
        this.isAnswerRight=true;
      }
      else{
        this.isAnswerRight=false;
      }
    }
  }
}
