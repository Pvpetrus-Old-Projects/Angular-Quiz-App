import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizClass } from './types/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {
  quizes: QuizClass[]=[];

  constructor() {
    this.quizes.push(new QuizClass(1,"Zwierzęta","Ile gatunków zwierząt jest na świecie?",["a.","b.","c.","d."],0));
    this.quizes.push(new QuizClass(2,"Natura","Ile różnych gatunków grzybów jadalnych jest w Polsce?",["a.","b.","c.","d."],0));
    this.quizes.push(new QuizClass(3,"Polityka","Jak ma na imię sławny polityk o nazwisku Korwin Mikke?",["a.","b.","c.","d."],0));
  }

  get Quizes(): QuizClass[]{
    return this.quizes;
  }

  get QuizesAsync(): Observable<QuizClass[]>{
    return of(this.quizes);
  }
}
