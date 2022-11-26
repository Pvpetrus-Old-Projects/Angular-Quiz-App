import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizesHttpClientService } from '../quizes-http-client.service';
import { QuizClass } from '../types/quiz';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  quizes:QuizClass[]=[];
  quizToAdd!: QuizClass;
  quizToAdd2!: QuizClass;
  answers!: string[];
  createButton: boolean = false;
  last_id: number = 0;

  constructor(private quizesHttpService: QuizesHttpClientService) {
    this.quizToAdd = new QuizClass(-1,'','',[],-1,new Date());
    this.answers = ['','','',''];
    quizesHttpService.getQuizes().subscribe(data => this.quizes=data);
  }

  ngOnInit(): void {
    this.quizToAdd.Answers = this.answers;
  }
  add(){
    for(let q of this.quizes) {
      if(q.Index_nr > this.last_id) this.last_id = q.Index_nr;
    }

    this.quizToAdd2 = new QuizClass(this.last_id+1,this.quizToAdd.Category,this.quizToAdd.Question,this.answers,this.quizToAdd.Right_answer_index,new Date());
    this.quizesHttpService.addQuiz(this.quizToAdd2).subscribe(ret=>  {
      console.log("ret",ret);
      this.quizes.push(this.quizToAdd2);}
      );
    this.quizToAdd.Index_nr = this.quizToAdd2.Index_nr+1;
    this.quizToAdd.Category = '';
    this.quizToAdd.Question = '';
    this.quizToAdd.Answers = ['','','',''];
    this.answers = ['','','',''];
    this.quizToAdd.Right_answer_index = -1;
  }
}
