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
