import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-detail-region',
  templateUrl: './detail-region.component.html',
  styleUrls: ['./detail-region.component.css']
})
export class DetailRegionComponent implements OnInit {

regions : any;
idre:any;

  constructor(private serviceregion: RegionService, private routes: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

     // afficher le detail de la region
       this.idre = this.routes.snapshot.params['id_regions']
       console.log("identeertyuiopppppppppppppppppppppp" + this.idre)

     this.serviceregion.detailregion(this.idre).subscribe(data=>{
      this.regions = data
      console.log(this.regions)
      console.table("Afficher le detail de  " + this.regions.languemregion);
    })
  }
 

}
