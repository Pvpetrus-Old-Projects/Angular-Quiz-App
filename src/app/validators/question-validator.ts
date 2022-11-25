import { Form, FormControl, Validators } from "@angular/forms";

export function questionValidator(control:FormControl){
    const questionValue=control.value;
    let ifQuestionMark=false;

    for(let i=0;i<questionValue.length;i++)
    {
        if(questionValue[i]=='?'){
            ifQuestionMark=true;
        }
    }
    return ifQuestionMark? null: {onlyLetters:!ifQuestionMark};
}