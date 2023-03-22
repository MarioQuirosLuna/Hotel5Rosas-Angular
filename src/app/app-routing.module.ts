import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericPageComponent } from './components/Pages/generic-page/generic-page.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { AboutUsComponent } from './components/Pages/about-us/about-us.component';
import { FacilitiesPageComponent } from './components/Pages/facilities-page/facilities-page.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'facilities', component: FacilitiesPageComponent },
  { path: '**', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
