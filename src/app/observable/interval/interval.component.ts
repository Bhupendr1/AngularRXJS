import { Component, inject } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/AppServiced/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  Intervalmsg: any
  _service:DesignUtilityService = inject(DesignUtilityService)
  videoSubscripation!: Subscription;
  ngOnInit(): void {
    // timer(delay,interval)
    // const broadCastVidoes = interval(1000)
    const broadCastVidoes = timer(2000,1000)
    // const broadCastVidoes = timer(5000,1000)
    this.videoSubscripation = broadCastVidoes.subscribe(Res => {
      console.log(Res)
      this.Intervalmsg = 'Video' + Res
      this._service.print(this.Intervalmsg,'elContainer')
      this._service.print(this.Intervalmsg,'elContainer1')
      this._service.print(this.Intervalmsg,'elContainer2')
      if (Res >= 5) {
        this.videoSubscripation.unsubscribe()
      }
    })
  }

}
