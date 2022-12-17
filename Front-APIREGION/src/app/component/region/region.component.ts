import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {


  regions: any;
  images:string = "assets/images";
  constructor(private serviceregion: RegionService, private router : Router) { }

  ngOnInit(): void {

    // afficher toutes les regions

    this.serviceregion.getAll().subscribe(data=>{
      this.regions = data;
      console.log("Afficher la  " +this.regions.languemregion);
     console.log("abasse"+data);
    })
  }

}
