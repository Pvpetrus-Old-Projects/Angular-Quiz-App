import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizesHttpClientService } from '../quizes-http-client.service';
import { QuizClass } from '../types/quiz';
import { questionValidator } from '../validators/question-validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  quizes:QuizClass[]=[];
  quizToAdd!: QuizClass;
  quizToAdd2!: QuizClass;
  createButton: boolean = false;
  last_id: number = 0;
  createForm:FormGroup;
  @ViewChildren('input') inputs:QueryList<ElementRef>;

  constructor(private quizesHttpService: QuizesHttpClientService, private fb:FormBuilder) {
    this.quizToAdd = new QuizClass(-1,'','',[],0,new Date());
    quizesHttpService.getQuizes().subscribe(data => this.quizes=data);
  }

  ngOnInit(): void {
    this.createForm=this.fb.group({
      category:new FormControl('Fakty', [Validators.required]),
      question:new FormControl('Kto zrobił najlepszy projekt?', [Validators.required,questionValidator]),
      answer1:new FormControl('Nasza grupa', [Validators.required]),
      answer2:new FormControl('Nasza grupa', [Validators.required]),
      answer3:new FormControl('Nasza grupa', [Validators.required]),
      answer4:new FormControl('Nasza grupa', [Validators.required]),
      correctAnswer:new FormControl(0, [Validators.required]),
      author:[null]
    });
  }
  add(event: Event){
    for(let q of this.quizes) {
      if(q.Index_nr > this.last_id) this.last_id = q.Index_nr;
    }
    const answers:string[]=[this.createForm.value.answer1, this.createForm.value.answer2,this.createForm.value.answer3,this.createForm.value.answer4];

    if(this.createForm.value.author) this.quizToAdd2 = new QuizClass(this.last_id+1,this.createForm.value.category,this.createForm.value.question,answers,this.createForm.value.correctAnswer,new Date(), this.createForm.value.author);
    else this.quizToAdd2 = new QuizClass(this.last_id+1,this.createForm.value.category,this.createForm.value.question,answers,this.createForm.value.correctAnswer,new Date());
    this.quizesHttpService.addQuiz(this.quizToAdd2).subscribe(ret=>  {
      console.log("ret",ret);
      this.quizes.push(this.quizToAdd2);}
      );
    this.quizToAdd.Index_nr = this.quizToAdd2.Index_nr+1;
    this.createForm.value.category = '';
    this.createForm.value.question = '';
    this.createForm.value.answer1='';
    this.createForm.value.asnwer2='';
    this.createForm.value.answer3='';
    this.createForm.value.answer4='';
    this.createForm.value.correctAnswer = 0;

    if(this.createForm.value.author) this.createForm.value.author='';

    for(let input of this.inputs)
    {
      if(input.nativeElement.type==='text'){
        input.nativeElement.value='';
      }
      else{
        input.nativeElement.value=0;
      }
    }

    event.preventDefault();
  }
  get category(){
    return this.createForm.get('category');
  }
  get question(){
    return this.createForm.get('question');
  }
  get answer1(){
    return this.createForm.get('answer1');
  }
  get answer2(){
    return this.createForm.get('answer2');
  }
  get answer3(){
    return this.createForm.get('answer3');
  }
  get answer4(){
    return this.createForm.get('answer4');
  }
  get correctAnswer(){
    return this.createForm.get('correctAnswer');
  }
}
