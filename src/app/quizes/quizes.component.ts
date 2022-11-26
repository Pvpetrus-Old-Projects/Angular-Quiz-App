import { Component, OnInit } from '@angular/core';
import { QuizesHttpClientService } from '../quizes-http-client.service';
import { QuizesService } from '../quizes.service';
import { QuizClass, QuizType } from '../types/quiz';
import { QuizComponent } from '../quiz/quiz.component';


@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {
  quizes:QuizClass[]=[];
  constructor(private quizesService: QuizesService, private quizesHttpService: QuizesHttpClientService) {
    //this.quizes = quizesService.Quizes;
    //quizesService.QuizesAsync.subscribe(data => this.quizes=data);
    quizesHttpService.getQuizes().subscribe(data => this.quizes=data);
  }

  ngOnInit(): void {
  }

  editQuiz(data:{quiz:QuizClass,which:number}){
    this.quizesHttpService.editQuiz(data.quiz).subscribe(ret=>  {
      console.log("ret",ret);
      this.quizes[data.which]=data.quiz;}
      );
  }
  deleteQuiz(index: number){
    let ind = this.quizes[index].Index_nr;
    this.quizesHttpService.deleteQuiz(ind).subscribe(ret=>  {
      console.log("ret",ret);
      this.quizes.splice(index, 1);}
      );
  }
}
