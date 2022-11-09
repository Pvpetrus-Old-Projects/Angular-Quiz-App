import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QuizClass, QuizType } from './types/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizesHttpClientService {
  private url = 'http://localhost:7777/quizes';

  constructor(private http: HttpClient) { }


  getQuizes(): Observable<QuizClass[]> {
    console.log("get quizes");
    return this.http.get<QuizType[]>(this.url)
      .pipe(
         map((quizes: {index_nr:number,
          category:string,
          question: string,
          answers: string[],
          right_answer_index: number}[])=>quizes.map(quiz=>{
            return new QuizClass(quiz.index_nr,quiz.category,quiz.question,quiz.answers,quiz.right_answer_index);})
        ),
        catchError(this.handleError<QuizClass[]>('getQuizes', []))

      );
  }

  editQuiz(quiz: QuizClass): Observable<QuizClass> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // const QuizObj={name: quiz.Name, surname: quiz.Surname, index_nr: quiz.Index_nr, dataUrodzenia: Quiz.dataUrodzenia};
    // if((Quiz as OutstandingQuizClass).stypendium!==undefined) Object.assign(QuizObj, {stypendium: (Quiz as OutstandingQuizClass).stypendium});
    // console.log("edit",QuizObj);
    return this.http.put<QuizClass>(this.url+'/'+ quiz.Index_nr, quiz, httpOptions)
      .pipe(
        // tu ładnie konwersja działa, niepotrzebne
        // map((Quizret: Quiz)=>{
        // if(Quizret.stypendium) return new OutstandingQuizClass(Quizret.name,Quizret.surname,Quizret.index_nr,Quizret.stypendium,Quizret.dataUrodzenia);
        // return new QuizClass(Quizret.name,Quizret.surname,Quizret.index_nr,Quizret.dataUrodzenia);}),
        catchError(this.handleError<QuizClass>('editQuiz'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
