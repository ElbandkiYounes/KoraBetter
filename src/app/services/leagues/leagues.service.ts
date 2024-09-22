import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { delay, Observable } from 'rxjs';
import { LeaguesData } from '../../models/leagues.model';


@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private http : HttpClient) { }

  getLeagues(coutry : string) : Observable<LeaguesData>{
    return this.http.get<LeaguesData>(environment.apiBaseUrl + '/leagues', 
      {
        headers: {
          'x-rapidapi-host': environment.apiHostValue,
          'x-rapidapi-key': environment.apiKeyValue
        },
        params: {
          'countryName': coutry
        }
      }
    ).pipe(delay(1200));
    
  }
}
