import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromissComponent } from './promiss/promiss.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObervabelComponent } from './observable/custom-obervabel/custom-obervabel.component';
import { UnsubscribCompComponent } from './unsubscrib-comp/unsubscrib-comp.component';

const routes: Routes = [
  {path:'promise',component:PromissComponent},
  {path:'unsubscribePage',component:UnsubscribCompComponent},
  {path:'observable',component:ObservableComponent,
  children:[
    {path:'',component:ListComponent},
    {path:'FormEvent',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'ofFrom',component:OfFromComponent},
    {path:'toarray',component:ToArrayComponent},
    {path:'customObservabel',component:CustomObervabelComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
