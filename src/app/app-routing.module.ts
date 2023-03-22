import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/interface/page/page.component';
import { AboutUsComponent } from './components/interface/about-us/about-us.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
