import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizClass } from '../types/quiz';
import { questionValidator } from '../validators/question-validator';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  @Input() quizForEdit!: QuizClass;
  @Input() quizForEdit_answers!: string[];
  @Output() editedQuiz: EventEmitter<QuizClass>=new EventEmitter<QuizClass>();
  formModel!: FormGroup;
  constructor() {
    console.log("Powstał właśnie formularz")
   }
  ngOnInit(): void {
    this.quizForEdit_answers = this.quizForEdit.Answers;
    this.formModel=new FormGroup({
      category: new FormControl(this.quizForEdit.Category,[Validators.required]),
      question: new FormControl(this.quizForEdit.Question,[Validators.required,questionValidator]),
      answer1: new FormControl(this.quizForEdit_answers[0],[Validators.required]),
      answer2: new FormControl(this.quizForEdit_answers[1],[Validators.required]),
      answer3: new FormControl(this.quizForEdit_answers[2],[Validators.required]),
      answer4: new FormControl(this.quizForEdit_answers[3],[Validators.required]),
      rightAnswer: new FormControl(this.quizForEdit.Right_answer_index,[Validators.required]),
    })
  }
  get category(){
    return this.formModel.get('category');
  }
  get question(){
    return this.formModel.get('question');
  }
  get answer1(){
    return this.formModel.get('answer1');
  }
  get answer2(){
    return this.formModel.get('answer2');
  }
  get answer3(){
    return this.formModel.get('answer3');
  }
  get answer4(){
    return this.formModel.get('answer4');
  }
  get rightAnswer(){
    return this.formModel.get('rightAnswer');
  }

  hide(): void{
    if(this.formModel.valid)
    {
      this.editedQuiz.emit(new QuizClass(this.quizForEdit.Index_nr,this.formModel.value.category,this.formModel.value.question,
        [this.formModel.value.answer1,this.formModel.value.answer2,this.formModel.value.answer3,
        this.formModel.value.answer4],this.formModel.value.rightAnswer,this.quizForEdit.Creation_date));
    }
  }

}
