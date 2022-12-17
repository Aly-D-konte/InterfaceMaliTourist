import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { DetailRegionComponent } from './component/detail-region/detail-region.component';
import { HomeComponent } from './component/home/home.component';
import { RegionComponent } from './component/region/region.component';
import { ConnexionComponent } from './Compte/connexion/connexion.component';
import { InscriptionComponent } from './Compte/inscription/inscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'detail/:id_regions',
    component: DetailRegionComponent,
  },

  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
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
