import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericPageComponent } from './components/Pages/generic-page/generic-page.component';
import { AreaPublicityComponent } from './components/interface/area-publicity/area-publicity.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { LateralMenuComponent } from './components/interface/lateral-menu/lateral-menu.component';
import { InformationComponent } from './components/interface/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/Pages/about-us/about-us.component';
import { HomePageComponent } from './components/Pages/home-page/home-page.component';
import { FacilitiesPageComponent } from './components/Pages/facilities-page/facilities-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericPageComponent,
    AreaPublicityComponent,
    FooterComponent,
    HeaderComponent,
    LateralMenuComponent,
    InformationComponent,
    AboutUsComponent,
    HomePageComponent,
    FacilitiesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
