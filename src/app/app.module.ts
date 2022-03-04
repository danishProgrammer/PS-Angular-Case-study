import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingListComponent } from './floating-list/floating-list.component';
import { PlaceholderDirective } from 'src/shared/placeholder.directive';
import { CategoryListComponent } from './category-list/category-list.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingListComponent,
    PlaceholderDirective,
    CategoryListComponent,
    CountDownTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
