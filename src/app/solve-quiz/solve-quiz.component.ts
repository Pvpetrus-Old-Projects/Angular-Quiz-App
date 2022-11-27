import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, last } from 'rxjs';
import { QuizesHttpClientService } from '../quizes-http-client.service';
import { QuizClass } from '../types/quiz';

@Component({
  selector: 'app-solve-quiz',
  templateUrl: './solve-quiz.component.html',
  styleUrls: ['./solve-quiz.component.css']
})
export class SolveQuizComponent implements OnInit {
  score:number;
  categories: string[];
  categoryForm:FormGroup;
  questions:QuizClass[];
  quizQuestions:QuizClass[];
  answerChosen:number;
  lastQuestion:boolean;
  solveClicked:boolean;
  currentIndex:number;
  endOfQuiz:boolean;

  constructor(private httpService: QuizesHttpClientService, private fb:FormBuilder) { 
    this.score=0;
    this.categories=["Matematyka", "Przysłowia", "Lektury"];
    this.questions=[];
    this.quizQuestions=[];
    this.answerChosen=-1;
    this.solveClicked=false;
    this.lastQuestion=false;
    this.endOfQuiz=false;
    this.currentIndex=0;
  }

  ngOnInit(): void {
    this.categoryForm=this.fb.group({
      category:[null]
    });
    this.httpService.getQuizes().subscribe(data => this.questions=data);
  }
  chooseQuestions(questions: QuizClass[]): QuizClass[]{
    const result:QuizClass[]=[];
    const usedIndexes:number[]=[];
    let index: number;
    let taken: boolean;
    let requiredLength:number=10;

    if(questions.length<10){
      requiredLength=questions.length;
    }

    while(result.length<requiredLength){
      index=parseInt((Math.random()*(questions.length-1)).toFixed(0));
      taken=usedIndexes.includes(index);
      
      if(taken===false){
        usedIndexes.push(index);
        result.push(questions[index]);
      }
    }

    return result;
  }
  submit(event: Event){
    if(this.categoryForm.value.category!=null){
      const filteredQuestions: QuizClass[]=this.questions.filter(e=>e.Category==this.categoryForm.value.category);

      this.quizQuestions=this.chooseQuestions(filteredQuestions);

      
      this.solveClicked=true;
      this.endOfQuiz=false;
      this.currentIndex=0;
      this.score=0;
    }

    event.preventDefault();
  }
  loadNextQuestion(){
    if(this.answerChosen===this.quizQuestions[this.currentIndex].Right_answer_index){
        this.score+=1;
    }

    this.answerChosen=-1;

    if(this.currentIndex+1===this.quizQuestions.length-1){
      this.lastQuestion=true;
      this.currentIndex+=1;
    }
    else if(this.currentIndex+1===this.quizQuestions.length){
      this.solveClicked=false;
      this.endOfQuiz=true;
      this.lastQuestion=false;
    }
    else{
      this.currentIndex+=1;
    }
  }

}
