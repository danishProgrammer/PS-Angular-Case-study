import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CountdownSubjectsComponent } from "./countdown-subjects.component";
import { CounterClicksSubjectsComponent } from "./counter-clicks-subjects/counter-clicks-subjects.component";
import { CounterTimestampSubjectsComponent } from "./counter-timestamp-subjects/counter-timestamp-subjects.component";
import { DisplayCounterSubjectsComponent } from "./display-counter-subjects/display-counter-subjects.component";
import { InputCounterSubjectsComponent } from "./input-counter-subjects/input-counter-subjects.component";

@NgModule({
    declarations:[
    CountdownSubjectsComponent,
    CounterClicksSubjectsComponent,
    CounterTimestampSubjectsComponent,
    DisplayCounterSubjectsComponent,
    InputCounterSubjectsComponent
  ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'',component:CountdownSubjectsComponent}
        ])
    ]
})

export class CountdownSubjectModule{
    
}