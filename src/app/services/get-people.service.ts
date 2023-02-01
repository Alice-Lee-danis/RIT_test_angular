import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IPeople from '../interfaces/IPeople';

@Injectable({
  providedIn: 'root'
})
export class GetPeopleService {

  constructor(private httpGetPeople: HttpClient) { }

  getPeople(requst:string):any{
    return this.httpGetPeople.get<IPeople>(requst)
  }

}
