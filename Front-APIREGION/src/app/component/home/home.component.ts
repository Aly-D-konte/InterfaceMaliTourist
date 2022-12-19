import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/authentification/utilisateur.service';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //afficher lee ressources public du backend
  content?: string;

  pays: any;
  constructor(private servicepays: PaysService, private userService: UserService) { }

  ngOnInit(): void {

      //afficher lee ressources public du backend
    this.userService.getPublicContent().subscribe({
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

     // afficher toutes les pays

     this.servicepays.getAll().subscribe(data=>{
      this.pays = data
      console.log("Afficher la  " +this.pays);
    })
  }

}
