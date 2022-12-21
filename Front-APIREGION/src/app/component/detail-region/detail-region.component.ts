import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.component.html',
  styleUrls: ['./detail-region.component.css']
})
export class DetailRegionComponent implements OnInit {

regions: any;

  constructor(private serviceregion: RegionService, private routes: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

     // afficher le detail de la region
      const idre = this.routes.snapshot.params['id_regions']
     this.serviceregion.detailregion(idre).subscribe(data=>{
    
      this.regions = data
      console.log("Afficher le detail de  " + this.regions);
    })
  }
 

}
