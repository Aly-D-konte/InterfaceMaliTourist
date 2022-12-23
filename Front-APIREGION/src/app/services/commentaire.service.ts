import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentaireService {
  url = 'http://localhost:8080/api/comentaire/add';

  constructor(private http: HttpClient) {}


  ajoutercommentaire(objet: any, description:any){
    let data = new FormData();

    data.append('objet', objet);
    data.append('description', description);
    return this.http.post(`${this.url}`, data); }
}
