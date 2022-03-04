import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { FloatingListComponent } from './floating-list/floating-list.component';

const routes: Routes = [
  {path:'',component:FloatingListComponent},
  {path:'categories',component:CategoryListComponent,},
  {path:'floating',component:FloatingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
