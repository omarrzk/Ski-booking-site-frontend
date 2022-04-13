import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'booking',component:BookingComponent},
  {path:'booking/confirm',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
