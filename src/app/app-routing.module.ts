import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericPageComponent } from './components/interface/generic-page/generic-page.component';

const routes: Routes = [
  { path: '**', component: GenericPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
