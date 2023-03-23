import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericPageComponent } from './components/Pages/generic-page/generic-page.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { AboutUsComponent } from './components/Pages/about-us-page/about-us.component';
import { FacilitiesPageComponent } from './components/Pages/facilities-page/facilities-page.component';
import { UbicationPageComponent } from './components/Pages/ubication-page/ubication-page.component';
import { ReservationDatePageComponent } from './components/Pages/reservation-date-page/reservation-date-page.component';
import { ContactUsPageComponent } from './components/Pages/contact-us-page/contact-us-page.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'facilities', component: FacilitiesPageComponent },
  { path: 'ubication', component: UbicationPageComponent },
  { path: 'reservation-dates', component: ReservationDatePageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: '**', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
