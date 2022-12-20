import { Component, OnInit } from '@angular/core';
import { Region } from '../models/region.model';
import { UserService } from '../services/authentification/utilisateur.service';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  content?: string;

   //ajout d'une regions

region : Region = {
  nomregions :"",
  coderegion:"",
  activiterregion: "",
  superficieregion:"",
  languemregion:"",

  images:"",
  description:"",
  nombrecommentaire: ""
}
  constructor(private userService: UserService,
    private regionService: RegionService
    ) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }

  ajouerR(){
    this.regionService.ajouterregion(this.region.coderegion ).subscribe(data => {

    });
  }

 
}
