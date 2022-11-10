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
    console.log("edited quiz: " + quiz.Index_nr);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<QuizClass>(this.url+'/'+ quiz.Index_nr, quiz, httpOptions)
      .pipe(
        catchError(this.handleError<QuizClass>('editQuiz'))
      );
  }

  deleteQuiz(index: number): Observable<any> {
    console.log("deleted quiz: " + index);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<QuizClass>(this.url+'/'+ index, httpOptions)
      .pipe(
        catchError(this.handleError<QuizClass>('deleteQuiz'))
      );
  }

  addQuiz(quiz: QuizClass): Observable<QuizClass> {
    console.log("added quiz: " + quiz.Index_nr);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<QuizClass>(this.url, quiz, httpOptions)
      .pipe(
        catchError(this.handleError<QuizClass>('addQuiz'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
