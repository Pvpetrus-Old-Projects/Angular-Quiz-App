import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizClass } from '../types/quiz';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  quizToAdd!: QuizClass;
  quizToAdd2!: QuizClass;
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
    this.quizToAdd2 = new QuizClass(this.quizToAdd.Index_nr,this.quizToAdd.Category,this.quizToAdd.Question,this.answers,this.quizToAdd.Right_answer_index);
    this.addedQuiz.emit(this.quizToAdd2);
    this.quizToAdd.Index_nr = this.quizToAdd2.Index_nr+1;
    this.quizToAdd.Category = '';
    this.quizToAdd.Question = '';
    this.quizToAdd.Answers = ['','','',''];
    this.answers = ['','','',''];
    this.quizToAdd.Right_answer_index = -1;
  }

}
