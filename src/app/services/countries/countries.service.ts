import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Countries } from '../../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Countries> {
    return this.http.get<Countries>(environment.apiBaseUrl + '/countries', {
      headers: {
        'x-rapidapi-host': environment.apiHostValue,
        'x-rapidapi-key': environment.apiKeyValue
      }
    }).pipe(
      delay(1200),
      map(countries => countries.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }
}