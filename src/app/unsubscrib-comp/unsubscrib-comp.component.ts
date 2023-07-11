import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Subject, Subscription, interval, take, takeUntil, takeWhile } from 'rxjs';
import { UnSub } from '../unsub.class';
@Component({
  selector: 'app-unsubscrib-comp',
  templateUrl: './unsubscrib-comp.component.html',
  styleUrls: ['./unsubscrib-comp.component.scss']
})
export class UnsubscribCompComponent extends UnSub implements OnInit{
data$=interval(1000)
dataVal:any
// dataSubscription:Subscription | undefined;
ngOnInit():void{
  
  //unsubscribe using ngOndestroy
  // this.dataSubscription=this.data$.subscribe((Data)=>{
  //   console.log('data',Data);
  // })


  // unsubscribe using take
  // this.data$.pipe(take(2)).subscribe((Data)=>{
  //   console.log('data',Data)
  // })


  // unsubscribe using takeWhile
  // this.data$.pipe(takeWhile((value)=>value < 5)).subscribe((data)=>{
  //   console.log('data',data);
  // });

  //unsubcribe using TakeUntil
  // first make a vaiable Unsubscribe

  this.data$.pipe(takeUntil(this.unSubscribe$)).subscribe((Data)=>{
    console.log('data',Data)
    this.dataVal=Data
  })
  //Define in ngOnDestroy methord next and complete
  // now final this.unSubscribe method
  // create a new file unsub.class.this and move the takeUntil code in the File
  // and call unsubclass whene we want to unsubscribe every data strem we want
}
}
