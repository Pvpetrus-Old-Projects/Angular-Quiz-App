export type QuizType={
  index_nr:number;
  category: string;
  question: string;
  answers: string[];
  right_answer_index:number;
  creation_date: Date;
  author?: string;
}

export class QuizClass{

  constructor(index_nr:number, category:string, question:string, answers:string[], right_answer_index:number, creation_date:Date);
  constructor(index_nr:number, category:string, question:string, answers:string[], right_answer_index:number, creation_date:Date, author?:string);

  constructor(private index_nr:number, private category:string, private question:string,private answers:string[], private right_answer_index:number, private creation_date:Date, private author?:string){}

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

  get Creation_date():Date{
    return this.creation_date;
  }

  set Creation_date(creation_date:Date){
    this.creation_date=creation_date;
  }

  get Author():string{
    if(this.author) return this.author;
    else return "anonim"
  }

  set Author(author:string){
    this.author=author;
  }
}
