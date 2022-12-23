import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/authentification/auth.services';
import { StorageService } from 'src/app/services/authentification/stockage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

    //les attribues pour l'authentification
    form: any = {
      username: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    username:any
  
    constructor(private authService: AuthService, private storageService: StorageService, private route: Router) { }
  
    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
       // this.roles = this.storageService.getUser().roles;
        this.username = this.storageService.getUser().username;
       
      }
    }
  
    onSubmit(): void {
      const { username, password } = this.form;
  
      this.authService.login(username, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.route.navigateByUrl('/');

         this.roles = this.storageService.getUser().roles;
         this.reloadPage();
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          
        }
      });
    }
  
    reloadPage(): void {
      window.location.reload();
    }
  }


