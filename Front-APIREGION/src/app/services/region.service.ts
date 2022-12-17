import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
//lien de principal de la region du backend
   liste = 'http://localhost:8080/Regions/liste';
   detail = 'http://localhost:8080/Regions/detail';

  constructor(private http : HttpClient) { }


//Afficher toutes les regions

  getAll(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.liste}`);
  }


  //afficher le detail d'un region

  detailregion(id_regions: number): Observable<Region[]> {
    
    return this.http.get<Region[]>(`${this.detail}/${id_regions}`)
  }
}
