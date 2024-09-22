import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatchesData } from '../../models/matche.model';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http : HttpClient) {}

  getMatches(
    leagueName: string,
    countryName?: string,       
    date: string = new Date().toISOString().split('T')[0] 
  ): Observable<MatchesData> {
    let params = new HttpParams()
      .set('leagueName', leagueName)
      .set('date', date);
  
    if (countryName) {
      params = params.set('countryName', countryName);
    }
    return this.http.get<MatchesData>(environment.apiBaseUrl + '/matches', {
      headers: new HttpHeaders()
        .set(environment.apiHostName, environment.apiHostValue)
        .set(environment.apiKeyName, environment.apiKeyValue),
      params: params,
    }).pipe(delay(1200));
  }
    
}
