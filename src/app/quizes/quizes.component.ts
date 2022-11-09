import { Component, OnInit } from '@angular/core';
import { QuizesHttpClientService } from '../quizes-http-client.service';
import { QuizesService } from '../quizes.service';
import { QuizClass, QuizType } from '../types/quiz';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  quizes:QuizClass[]=[];
  whichClicked:number=-1;
  constructor(private quizesService: QuizesService, private quizesHttpService: QuizesHttpClientService) {
    //this.quizes = quizesService.Quizes;
    //quizesService.QuizesAsync.subscribe(data => this.quizes=data);
    quizesHttpService.getQuizes().subscribe(data => this.quizes=data);
  }

  ngOnInit(): void {
  }

}
