import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { DetailRegionComponent } from './component/detail-region/detail-region.component';
import { ContactComponent } from './component/contact/contact.component';
import { RegionComponent } from './component/region/region.component';
import { InscriptionComponent } from './Compte/inscription/inscription.component';
import { ConnexionComponent } from './Compte/connexion/connexion.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailRegionComponent, ContactComponent, RegionComponent, ConnexionComponent, InscriptionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}