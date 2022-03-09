import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CountDownTimerComponent } from "./count-down-timer.component";
import { CounterClicksComponent } from "./counter-clicks/counter-clicks.component";
import { CounterTimestampComponent } from "./counter-timestamp/counter-timestamp.component";
import { DisplayCounterComponent } from "./display-counter/display-counter.component";
import { InputCounterComponent } from "./input-counter/input-counter.component";

@NgModule({
    declarations:[
    CountDownTimerComponent,
    DisplayCounterComponent,
    InputCounterComponent,
    CounterTimestampComponent,
    CounterClicksComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'',component:CountDownTimerComponent},
        ])
    ]
})
export class CountDownTimerModule{

}