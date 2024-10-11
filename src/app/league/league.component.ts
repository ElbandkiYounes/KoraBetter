import { MatchesData } from './../models/matche.model';
import { LeaguesService } from '../services/leagues/leagues.service';
import { Countries } from '../models/countries.model';
import { CountriesService } from '../services/countries/countries.service';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LeaguesData } from '../models/leagues.model';
import { MatchesService } from '../services/matches/matches.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export class LeagueComponent {

  countries ?: Countries
  leaguesData ?: LeaguesData
 
  countryName?: string = this.countries?.at(0)?.name;
  leagueName?: string = this.leaguesData?.data[0].name;
  date : string = new Date().toISOString().split('T')[0];
  
  matchesData ?: MatchesData
  
  constructor(
    private countriesService : CountriesService,
    private leaguesService : LeaguesService,
    private matchesService : MatchesService
  ) { }
  
  onCountryChange(event : Event): void {
    this.countryName = (event.target as HTMLSelectElement).value;;
    if (this.matchesData) {
      this.matchesData.data = [];
    }
    this.getLeagues(this.countryName);
  }

  onLeagueChange(event : Event): void {
    this.leagueName = (event.target as HTMLSelectElement).value;
  }

  onDateChange(event: Event): void {
    const inputDate = (event.target as HTMLInputElement).value;

    const [month, day, year] = inputDate.split('/').map(Number);

    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    this.date = formattedDate;
  }

  searchMatches() {
    this.getMatches(this.countryName!, this.leagueName!,this.date);
    
  }

  getCountries() {
    this.countriesService.getCountries().subscribe(
      data => {
        this.countries = data;
        this.countryName = data[0].name;
      }
    )
  }

  getLeagues(selectedCountry : string) {
    this.leaguesService.getLeagues(selectedCountry).subscribe(
      data => {
        this.leaguesData = data;
        if(data.data.length > 0)
        this.leagueName = data.data[0].name;
        else
        this.leagueName = "No Leagues Found";
      }
    )
  }

  getMatches(countryName : string, leagueName : string, date : string) {
    this.matchesService.getMatches(leagueName, countryName, date).subscribe(
      data => {
        this.matchesData = data;
      })
  }

  ngOnInit() {
    this.getCountries();
    this.getLeagues(this.countryName!);
  }
  
}
