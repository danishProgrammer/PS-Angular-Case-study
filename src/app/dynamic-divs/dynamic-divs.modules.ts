import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicContentComponent } from "./dynamic-content/dynamic-content.component";
import { DynamicDivsComponent } from "./dynamic-divs.component";

@NgModule({
    declarations:[
        DynamicDivsComponent,
        DynamicContentComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {path:'',component:DynamicDivsComponent}
        ])
    ]
})

export class DynamicDivsModule{}