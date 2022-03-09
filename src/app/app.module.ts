import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingListComponent } from './floating-list/floating-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryListModule } from './category-list/category-list.module';
import { CountDownTimerModule } from './count-down-timer/count-down-timer.module';
import { FloatingListModule } from './floating-list/floating-list.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
