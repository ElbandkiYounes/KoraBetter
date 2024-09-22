import { MatchesData } from './../models/matche.model';
import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from '../services/matches/matches.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-league-view',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './league-view.component.html',
  styleUrl: './league-view.component.css'
})
export class LeagueViewComponent implements OnInit{
  @Input({ required: true }) leagueName : string = '';
  @Input({ required: true }) countryName : string = '';
  @Input({ required: false }) date ?: string;
  matchesData ?: MatchesData;

  constructor(private matchesService : MatchesService) {}

  ngOnInit(): void {
    this.matchesService.getMatches(this.leagueName, this.countryName,this.date).subscribe(
      data => {
        this.matchesData = data;
        console.log(data);
      }
    )
  }

}
