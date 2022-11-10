import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizClass } from '../types/quiz';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Output() deleteDecision: EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.deleteDecision.emit(true);
  }
  cancel(){
    this.deleteDecision.emit(false);
  }

}
