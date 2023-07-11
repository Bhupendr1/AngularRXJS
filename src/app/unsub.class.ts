import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export abstract class UnSub implements OnDestroy{
    unSubscribe$ = new Subject<void>()
    ngOnDestroy():void{
        //   this.dataSubscription?.unsubscribe();
        this.unSubscribe$.next();
        this.unSubscribe$.complete();
        }
}