import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericPageComponent } from './components/Pages/generic-page/generic-page.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';

const routes: Routes = [
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
