import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../models/pays.model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
//lien de principal de la region du backend
baseurl = 'http://localhost:8080/Pays/liste';

  constructor(private http : HttpClient) { }
  
//Afficher toutes les pays

getAll(): Observable<Pays[]> {
  return this.http.get<Pays[]>(`${this.baseurl}`);
}
}
