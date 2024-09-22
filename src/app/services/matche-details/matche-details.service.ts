import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatcheDetails, MatcheDetailsData } from '../../models/matchDetails.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatcheDetailsService {

  constructor(private http : HttpClient) { }

  getMatcheDetails(matchId: number) {
    return this.http.get<MatcheDetailsData>(environment.apiBaseUrl + '/matches/' + matchId, {
      headers: new HttpHeaders()
        .set(environment.apiHostName, environment.apiHostValue)
        .set(environment.apiKeyName, environment.apiKeyValue),
      params: {
        id: matchId.toString()
      }
    });
  }
}
