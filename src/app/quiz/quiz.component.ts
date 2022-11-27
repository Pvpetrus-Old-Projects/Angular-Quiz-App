import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizClass, QuizType } from '../types/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() quiz!:QuizClass;
  @Input() isOdd!:boolean;
  @Input() isEven!:boolean;
  @Input() which!:number;
  @Input() searchQuery!:string;
  quizForEdit:QuizClass = new QuizClass(-1,'','',[],-1,new Date());
  quizForDelete:QuizClass = new QuizClass(-1,'','',[],-1,new Date());
  @Output() doEditInParent: EventEmitter<{quiz:QuizClass,which:number}>=new EventEmitter();
  @Output() doDeleteInParent: EventEmitter<number>=new EventEmitter<number>();
  answered!:boolean;
  input_answer:number=-1;
  isAnswerRight:boolean=false;
  deleteButton: boolean = false;
  editButton: boolean = false;
  compName!: string | null;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {this.route.paramMap.subscribe(params =>this.compName=params.get('app-quiz'))}

  onClick():void{
    if(this.input_answer!=-1)
    {
      this.answered=true;
      if(this.input_answer==(this.quiz.Right_answer_index-1))
      {
        this.isAnswerRight=true;
      }
      else{
        this.isAnswerRight=false;
      }
    }
  }
  clickOnDelete(){
    this.deleteButton=true;
  }
  deleteQuiz(choice: boolean){
    this.deleteButton=false;
    if(choice==true)
    {
      this.doDeleteInParent.emit(this.which);
    }
  }
  clickOnEdit(){
    this.editButton=true;
  }
  editQuiz(quiz: QuizClass){
    this.editButton=false;
    let which = this.which;
    this.doEditInParent.emit({quiz,which});
  }
}
