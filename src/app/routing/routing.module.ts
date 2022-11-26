import { NgModule } from "@angular/core";
import  { RouterModule, Routes } from "@angular/router"
import { CreateComponent } from "../create/create.component";
import { QuizComponent } from "../quiz/quiz.component";
import { QuizesComponent } from "../quizes/quizes.component";

const routes: Routes = [
    {path:'quizes',component:QuizesComponent},
    {path:'add',component:CreateComponent},
    {path:'quiz/:index',component:QuizComponent},
    {path:'', redirectTo:'/quizes',pathMatch:'full'}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule],
    declarations:[]
})
export class RoutingModule{

}