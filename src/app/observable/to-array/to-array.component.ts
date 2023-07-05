import { Component } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent {
  ConvertnumberintoArray!: any[]
  anothearray!: any[]
  Users = [
    { name: 'Anup', skill: 'angular' },
    { name: 'Bhupendra', skill: 'angular,Html' },
    { name: 'Rakesh', skill: 'angular,Html,Css' },
    { name: 'manisha', skill: 'angular,js' },

  ]
  sourceSub!: Subscription;
  ngOnInit(): void {
    const source = interval(1000)
    this.sourceSub = source.pipe(
      take(5),
      toArray()).subscribe(res => {
        this.sourceSub.unsubscribe()
        this.ConvertnumberintoArray = res
        console.log(res)
      })
    const source2 = from(this.Users)
    source2.pipe(toArray()).subscribe(res => {
      console.log(res)
    })

    const source3 = of('Bhupendra', 'Shyam', 'Radhay', 'Anup')
    source3.pipe(toArray()).subscribe(res => {
      console.log(res)
    })
  }
}
