import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizClass } from '../types/quiz';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  quizToAdd!: QuizClass;
  answers!: string[];
  @Input() last_id!: number
  @Output() addedQuiz: EventEmitter<QuizClass>=new EventEmitter<QuizClass>();

  constructor() {
    this.quizToAdd = new QuizClass(-1,'','',[],-1);
    this.answers = ['','','',''];
  }

  ngOnInit(): void {
    this.quizToAdd.Answers = this.answers;
    this.quizToAdd.Index_nr = this.last_id+1;
  }
  add(){
    this.addedQuiz.emit(this.quizToAdd);
  }

}
