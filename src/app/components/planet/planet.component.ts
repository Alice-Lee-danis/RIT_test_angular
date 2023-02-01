import { Component } from '@angular/core';
import IPlanet from 'src/app/interfaces/IPlanet';
import { GetPlanetsService } from 'src/app/services/get-planets.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent {

  public planetsArr:Array<IPlanet> = []

  constructor(public getPlanetsService:GetPlanetsService, public router:Router){}

  ngOnInit() {
    this.getPlanetsService.getPlanets().subscribe((r:any)=>{
      this.planetsArr = r.results
    })
  }

  openPlanet(id:number){
    this.router.navigate(['/planet'], {queryParams:{order:id+1}})
  }

}
