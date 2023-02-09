import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './bus-list/bus-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
