import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PromissComponent } from './promiss/promiss.component';
import { ObservableComponent } from './observable/observable.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntervalComponent } from './observable/interval/interval.component';
import {MatDividerModule} from '@angular/material/divider';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObervabelComponent } from './observable/custom-obervabel/custom-obervabel.component';
import { UnsubscribCompComponent } from './unsubscrib-comp/unsubscrib-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PromissComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObervabelComponent,
    UnsubscribCompComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
