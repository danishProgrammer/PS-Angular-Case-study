import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FloatingListComponent } from "./floating-list.component";

@NgModule({
    declarations:[
        FloatingListComponent
    ],
    imports:[CommonModule,
    RouterModule.forChild([
        {path:'',component:FloatingListComponent},
    ])]
})
export class FloatingListModule{}