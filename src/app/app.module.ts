import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/interface/page/page.component';
import { AreaPublicityComponent } from './components/interface/area-publicity/area-publicity.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { LateralMenuComponent } from './components/interface/lateral-menu/lateral-menu.component';
import { InformationComponent } from './components/interface/information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AreaPublicityComponent,
    FooterComponent,
    HeaderComponent,
    LateralMenuComponent,
    InformationComponent
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
