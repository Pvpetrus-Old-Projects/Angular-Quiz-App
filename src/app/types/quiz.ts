export type QuizType={
  index_nr:number
  category: string;
  question: string;
  answers: string[];
  right_answer_index:number;
}

export class QuizClass{

  constructor(private index_nr:number, private category:string, private question:string,private answers:string[], private right_answer_index: number){}

  get Index_nr():number{
    return this.index_nr;
  }

  set Index_nr(index_nr:number){
    this.index_nr=index_nr;
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
