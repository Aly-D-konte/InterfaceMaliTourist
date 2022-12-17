import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pays: any;
  constructor(private servicepays: PaysService) { }

  ngOnInit(): void {

     // afficher toutes les pays

     this.servicepays.getAll().subscribe(data=>{
      this.pays = data
      console.log("Afficher la  " +this.pays);
    })
  }

}
