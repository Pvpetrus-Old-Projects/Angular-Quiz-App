import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizClass } from '../types/quiz';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  @Input() quizForEdit!: QuizClass;
  @Input() quizForEdit_answers!: string[];
  @Output() editedQuiz: EventEmitter<QuizClass>=new EventEmitter<QuizClass>();

  ngOnInit(): void {
    this.quizForEdit_answers = this.quizForEdit.Answers;
  }

  hide(): void{
    this.editedQuiz.emit(this.quizForEdit);
  }

}
