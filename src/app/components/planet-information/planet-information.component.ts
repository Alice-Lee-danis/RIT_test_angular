import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import IPeople from 'src/app/interfaces/IPeople';
import IPlanet from 'src/app/interfaces/IPlanet';

import { GetPeopleService } from 'src/app/services/get-people.service';
import { GetPlanetsService } from 'src/app/services/get-planets.service';

@Component({
  selector: 'app-planet-information',
  templateUrl: './planet-information.component.html',
  styleUrls: ['./planet-information.component.scss']
})
export class PlanetInformationComponent implements OnInit{

  public planetId:number | null = null
  public planet:IPlanet | null = null
  public peopleArr:Array<IPeople>  = []
  public peopleArrFilter:Array<IPeople>  = []
  public sbj = new Subject<any>();

  constructor(public router:ActivatedRoute, public getPeopleService:GetPeopleService, public getPlanetsService:GetPlanetsService,){}

  ngOnInit(): void {
    this.sbj.subscribe(
      {next:()=>{
        for(const item of this.planet!.residents!){
          this.getPeopleService.getPeople(item).subscribe((item:IPeople)=>{
            this.peopleArr?.push(item)
            this.peopleArrFilter.push(item)
          })
        }
      }
    })
    this.router.queryParams.subscribe((item:any)=>{
      this.planetId = item.order
    })
    
    this.getPlanetsService.getPlanet(this.planetId!).subscribe((item:any)=>{
      this.planet = item as IPlanet
      console.log(this.planet)
      this.sbj.next(this.planet!)
    })
  }

  filterGender(item:Event){
    console.log((item.target as HTMLSelectElement).value)
    switch((item.target as HTMLSelectElement).value){
      case "all": 
          this.peopleArrFilter = this.peopleArr;
        break; 
      case "male":
          this.peopleArrFilter = this.peopleArr.filter((item:IPeople)=>item.gender=="male")
        break;
      case "female":
          this.peopleArrFilter = this.peopleArr.filter((item:IPeople)=>item.gender=="female")
        break;
      case "n/a":
          this.peopleArrFilter = this.peopleArr.filter((item:IPeople)=>item.gender=="n/a")
        break;
    }
  }
}
