import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IPlanet from '../interfaces/IPlanet';

@Injectable({
  providedIn: 'root'
})
export class GetPlanetsService {

  constructor(private httpGetPlanets: HttpClient) { }

  getPlanets():any{
    return this.httpGetPlanets.get<Array<IPlanet>>(`https://swapi.dev/api/planets`)
  }

  getPlanet(id:number):any{
    return this.httpGetPlanets.get<IPlanet>(`https://swapi.dev/api/planets/${id}`)
  }
}
