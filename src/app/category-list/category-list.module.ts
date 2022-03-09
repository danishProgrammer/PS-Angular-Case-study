import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CategoryListComponent } from "./category-list.component";
import { CategoryComponent } from "./category/category.component";

@NgModule({
    declarations:[
        CategoryListComponent,
        CategoryComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path:'',component:CategoryListComponent }
        ])
    ],
    exports:[CategoryListComponent]
})

export class CategoryListModule{}