import { createInjectableType } from '@angular/compiler';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/AppServiced/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent{
  _service:DesignUtilityService = inject(DesignUtilityService)
  @ViewChild('addBtn') addBtn!: ElementRef;
  ngOnInit(): void {

  }
  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'video' + count++
      this._service.print(countVal,'elContainer')
      this._service.print(countVal,'elContainer2')
    })
  }
}

