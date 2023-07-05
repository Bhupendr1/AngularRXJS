import { Component } from '@angular/core';

@Component({
  selector: 'app-promiss',
  templateUrl: './promiss.component.html',
  styleUrls: ['./promiss.component.scss']
})
export class PromissComponent {
  promiseValue:any
   dell ={
    brand:'Dell',
    harddisk:'2TB',
    color:'black',
    status:'Dell is purched successfully'
   }
   hp ={
    brand:'Hp',
    harddisk:'1TB',
    color:'white',
    status:'HP is purched success'
   }
   NoAvail={
    brand:'Not Available in the Stored',
    status:'failed'
   }
   DellAvailabel(){
    return true
   }
   HpAvailabel(){
    return false
   }

  async fetch2(){
    let data= await this.fetch1()
    console.log(data)
   }
   fetch3(){}
     
   fetch1(){
    let LaptopBuy = new Promise((resolve,reject)=>{
      if(this.DellAvailabel()){
       return setTimeout(() => {
        resolve(this.dell)
       }, 2000);
      }else if(this.HpAvailabel()){
        return setTimeout(() => {
          resolve(this.hp)
        }, 2000);
      }else{
        return setTimeout(() => {
          reject(this.NoAvail)
        }, 2000);
      }
     })
     LaptopBuy.then(res=>{
      this.promiseValue =res
      console.log(res)
     }).catch(res=>{
      this.promiseValue=res
      console.log(res)
     })
     
   }
  ngOnInit(): void {
}
}