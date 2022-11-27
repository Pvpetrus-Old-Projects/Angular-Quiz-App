import { Pipe, PipeTransform } from '@angular/core';
import { QuizClass } from './types/quiz';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(quizes: QuizClass[], query: string): QuizClass[] {
    if (query === '') {
      return quizes;
    }
    return quizes.filter(quiz => quiz.Category.indexOf(query) >= 0);
  }

}
