import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,data:{message:'Welcome to the Case Study'}},
  {path:'categories',loadChildren:() => import('./category-list/category-list.module').then(m => m.CategoryListModule)},
  {path:'countdown',loadChildren:() => import('./count-down-timer/count-down-timer.module').then(m => m.CountDownTimerModule)},
  {path:'floating',loadChildren:() => import('./floating-list/floating-list.module').then(m => m.FloatingListModule)},
  {path:'countdown-subject',loadChildren:() => import('./countdown-subjects/countdown-subjects.module').then(m => m.CountdownSubjectModule)},
  {path:'student',loadChildren:() => import('./student/student.module').then(m => m.StudentModule)},
  {path:'**',component:HomeComponent,data:{message:'Path Not found'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
