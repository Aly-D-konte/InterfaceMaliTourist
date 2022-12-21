import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { DetailRegionComponent } from './component/detail-region/detail-region.component';
import { HomeComponent } from './component/home/home.component';
import { RegionComponent } from './component/region/region.component';
import { ConnexionComponent } from './Compte/connexion/connexion.component';
import { InscriptionComponent } from './Compte/inscription/inscription.component';
import { ProfileComponent } from './Compte/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: 'detail/:id_regions',
    component: DetailRegionComponent,
  },
  
  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'admin',
    component: DashboardComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
