import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { FloatingListComponent } from './floating-list/floating-list.component';

const routes: Routes = [
  {path:'',component:FloatingListComponent},
  {path:'categories',component:CategoryListComponent,},
  {path:'countdown',component:CountDownTimerComponent},
  {path:'floating',component:FloatingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
