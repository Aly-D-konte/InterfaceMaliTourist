import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { DetailRegionComponent } from './component/detail-region/detail-region.component';
import { ContactComponent } from './component/contact/contact.component';
import { RegionComponent } from './component/region/region.component';
import { InscriptionComponent } from './Compte/inscription/inscription.component';
import { ConnexionComponent } from './Compte/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './Compte/profile/profile.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailRegionComponent, ContactComponent, RegionComponent, ConnexionComponent, InscriptionComponent, DashboardComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}