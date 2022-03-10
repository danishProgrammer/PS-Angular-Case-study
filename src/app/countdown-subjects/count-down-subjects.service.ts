import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TimerInfo } from "src/shared/app.types";

@Injectable({providedIn:'root'})
export class CountDownSubjectsService{
    public count = new Subject<number>();
    public timerInfo = new Subject<TimerInfo>();
}