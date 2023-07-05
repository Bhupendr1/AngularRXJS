import { Component, inject } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/AppServiced/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
  ObsMsg: any
  _Service: DesignUtilityService = inject(DesignUtilityService)
  ngOnInit(): void {
    //of
    const Obs1 = of('anup', 'Rakesh', 'ankit')
    Obs1.subscribe(res => {
      this._Service.print(res, 'elContainer')
    })

    const Obs2 = of({ a: 'anup', b: 'Rakesh', c: 'ankit' })
    Obs2.subscribe(res => {
      this.ObsMsg = res;
    })
    //from - array convert into observable convert
    let arr = ['Bhupendra', 'Rakesh', 'Sumit']
    const Obs3 = from(arr)
    Obs3.subscribe(res => {
      this._Service.print(res, 'elContainer3')
      console.log(res)
    })
    //from promise convert into observable
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise is resolved')
      }, 2000)
    })
    const Obs4 = from(promise)
    Obs4.subscribe(res => {
      this._Service.print(res, 'elContainer4')
    })
    const Obs5 = from("Bhupendra is good at Angular")
    Obs5.subscribe(res => {
      this._Service.print(res, 'elContainer5')
    })
  }
}
