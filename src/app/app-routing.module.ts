import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { FloatingListComponent } from './floating-list/floating-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/floating',pathMatch:'full'},
  {path:'categories',loadChildren:() => import('./category-list/category-list.module').then(m => m.CategoryListModule)},
  {path:'countdown',loadChildren:() => import('./count-down-timer/count-down-timer.module').then(m => m.CountDownTimerModule)},
  {path:'floating',loadChildren:() => import('./floating-list/floating-list.module').then(m => m.FloatingListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
