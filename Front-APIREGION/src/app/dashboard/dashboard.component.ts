import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Region } from '../models/region.model';
import { UserService } from '../services/authentification/utilisateur.service';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  
  form: any = {
    nomregions: null,
    coderegion: null,
    activiterregion: null,
    superficieregion: null,
    languemregion: null,
    description: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  content?: string;
  formmodule!: FormGroup;

  allregion:any

  //ajout d'une regions

  file: any;
  isSuccess = false;
  region: Region = {
    nomregions: '',
    coderegion: '',
    activiterregion: '',
    superficieregion: '',
    languemregion: '',

    // images: null,
    description: '',
    nombrecommentaire: '',
  };
  constructor(
    private userService: UserService,
    private regionService: RegionService,
    private formB: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log(err);
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = 'Error with status: ' + err.status;
        }
      },
    });

    this.formmodule = this.formB.group({
      file: ['', Validators.required],
    });





    //recuperation du total du reseau

    this.regionService.getAll().subscribe(data=>{
      this.allregion =data;

      console.log("possssssssssssssssssssssssssss" + this.allregion)
    })
  }

  fileChang(event: any) {
    this.file = event.target.files[0];
  }

  ajouerR() {
    Swal.fire({
      title: 'Voul?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        this.regionService
          .ajouterregion(
            this.region.nomregions,
            this.region.coderegion,
            this.region.activiterregion,
            this.region.superficieregion,
            this.region.languemregion,
            this.region.description,
            this.file
          )
          .subscribe((data) => {
            // console.log("ajout de la region" + this.region)
            this.region = data;
            console.log('ajout de la region' + this.region);
          });
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }


}
