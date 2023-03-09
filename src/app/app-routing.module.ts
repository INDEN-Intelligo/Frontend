import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { WhellcomeComponent } from './whellcome/whellcome.component';

const routes: Routes = [

  { path: '', component: WhellcomeComponent},
  { path: 'bus', component: BusListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
