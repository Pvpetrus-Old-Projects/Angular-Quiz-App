export type QuizType={
    category: string;
    question: string;
    answers: string[];
    right_answer_index:number;
}

export class QuizClass{
  category: string;
  question: string;
  answers: string[];
  right_answer_index:number;

  constructor(category:string, question:string, answers:string[], right_answer_index: number){
    this.category = category;
    this.question = question;
    this.answers = answers;
    this.right_answer_index = right_answer_index;
  }

  get Category():string{
    return this.category;
  }

  set Category(category:string){
    this.category=category;
  }

  get Question():string{
    return this.question;
  }

  set Question(question:string){
    this.question=question;
  }

  get Answers():string[]{
    return this.answers;
  }

  set Answers(answers:string[]){
    this.answers=answers;
  }

  get Right_answer_index():number{
    return this.right_answer_index;
  }

  set Right_answer_index(right_answer_index:number){
    this.right_answer_index=right_answer_index;
  }
}
