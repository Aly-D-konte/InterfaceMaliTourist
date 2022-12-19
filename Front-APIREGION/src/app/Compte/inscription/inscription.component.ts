import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/authentification/auth.services';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  //les attribues pour l'authentification
  nom!: string;
  email!: string;
  motdepass!: string;

  // form: any = {
  //   username: null,
  //   email: null,
  //   password: null
  // };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  utilisateur! : User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //button pour l'inscription

  inscritpion(): void {
    console.log("-------------------------------------------")
    
    let user = new User({
      "username": this.nom,
      "password": this.motdepass,
      "useremail": this.email
    })
    // const { username, email, password } = this.form;
    this.authService.register(user).subscribe(data =>{
      console.log("-------------------------------------------")
      this.utilisateur = data;
      console.table(data)
      // next: data => {
      //   console.table(data);
      //   this.isSuccessful = true;
      //   this.isSignUpFailed = false;
      // },
      // error: err => {
      //   this.errorMessage = err.error.message;
      //   this.isSignUpFailed = true;
      // }
    });

  }
}
