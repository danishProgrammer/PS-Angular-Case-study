import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingListComponent } from './floating-list/floating-list.component';
import { PlaceholderDirective } from 'src/shared/placeholder.directive';
import { CategoryListComponent } from './category-list/category-list.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { DisplayCounterComponent } from './count-down-timer/display-counter/display-counter.component';
import { InputCounterComponent } from './count-down-timer/input-counter/input-counter.component';
import { CounterTimestampComponent } from './count-down-timer/counter-timestamp/counter-timestamp.component';
import { CounterClicksComponent } from './count-down-timer/counter-clicks/counter-clicks.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingListComponent,
    PlaceholderDirective,
    CategoryListComponent,
    CountDownTimerComponent,
    DisplayCounterComponent,
    InputCounterComponent,
    CounterTimestampComponent,
    CounterClicksComponent
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
