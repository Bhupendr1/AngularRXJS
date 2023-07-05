import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  constructor() { }
  print(VAL:any,containerId:any){
    let el = document.createElement('li')
    el.innerText=VAL;
    document.getElementById(containerId)?.appendChild(el)
   }
}
