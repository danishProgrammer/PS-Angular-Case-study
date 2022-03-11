import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";

@NgModule({
    declarations:[
        StudentComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'',component:StudentComponent}
        ])
    ]
})

export class StudentModule{}