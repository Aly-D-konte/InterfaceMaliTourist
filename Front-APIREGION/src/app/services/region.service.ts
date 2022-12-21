import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
//lien de principal de la region du backend
   liste = 'http://localhost:8080/api/region/liste';
   detail = 'http://localhost:8080/api/region/detail';
   ajout = 'http://localhost:8080/api/region/ajouterRegion';

  constructor(private http : HttpClient) { }





//Afficher toutes les regions

  getAll(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.liste}`);
  }


  //afficher le detail d'un region

  detailregion(id_regions: number): Observable<Region[]> {
    
    return this.http.get<Region[]>(`${this.detail}/${id_regions}`)
  }


  //this.region.nomregions, this.region.coderegion, this.region.activiterregion,  this.region.superficieregion, this.region.languemregion, this.region.description, this.region.images


  //methode permettant d'ajouter une region
  ajouterregion(nomregions:any, coderegion: any, activiterregion: any, superficieregion:any, languemregion:any, description :any, file :any): Observable<any>{
console.log("languemregion  "+ languemregion +     + "description: " + description)
    const data:FormData = new FormData()
    data.append('nomregions', nomregions );
    data.append('coderegion', coderegion );
    data.append('activiterregion', activiterregion );
    data.append('superficieregion', superficieregion );
    data.append('languemregion', languemregion );
    data.append('description', description );
    data.append('file', file );
    console.log("my data : " +  data)
    return this.http.post<Region>("http://localhost:8080/api/region/ajouterRegion", data)
  }
}
