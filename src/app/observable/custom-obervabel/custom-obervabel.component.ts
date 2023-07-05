import { ObserversModule } from '@angular/cdk/observers';
import { Component, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/AppServiced/design-utility.service';

@Component({
  selector: 'app-custom-obervabel',
  templateUrl: './custom-obervabel.component.html',
  styleUrls: ['./custom-obervabel.component.scss']
})
export class CustomObervabelComponent {
  _Service: DesignUtilityService = inject(DesignUtilityService)
  techStatus: any
  techStatus2: any
  names: any
  nameStatus: any
  subs2!: Subscription
  ngOnInit(): void {
    //Ex -01
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular')
      }, 1000);
      setTimeout(() => {
        observer.next('java Script')
      }, 2000);
      setTimeout(() => {
        observer.next('Html And Css')
        observer.complete()
      }, 3000);
      setTimeout(() => {
        observer.next('jQuery')

      }, 4000);
    })
    cusObs1.subscribe((res: any) => {
      this._Service.print(res, 'elContainer')
    },
      (err: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    )
    //Ex - 02 
    const Arr2 = ['Angular','Javascript','Html','css','typeScript']
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        if(count >=2){
          observer.error('error emit')
        }
        if (count >= 3) {
          observer.complete()
        }
        count++
      }, 1000)
    })
    this.subs2 = cusObs2.subscribe((res: any) => {
      this._Service.print(res, 'elContainer2')
    },
    (err: any) => {
      this.techStatus2 = 'error';
    },
    () => {
      this.techStatus2 = 'completed';
    })
    //Ex - 03 
    const Arr3 = [ 'Anup','Rakesh','Ankit','bhupendra','Shobit','Sharul','robert']

    const cusObs3 = Observable.create((observer:any)=>{
      let count = 0
      setInterval(()=>{
        observer.next(Arr3[count])
        if(count>=3){
          observer.complete()
        }
        if(count>=6){
          observer.error('emit error')
        }
        count++
      },1000)
  })
  cusObs3.subscribe((res:any)=>{
  console.log(res)
  this.names=res
    },
    (err: any) => {
      this.nameStatus = 'error';
    },
    () => {
      this.nameStatus = 'completed';
    })
}
  ngOnDestroy() {
    this.subs2.unsubscribe()
  }
}
