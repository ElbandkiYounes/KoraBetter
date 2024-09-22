import { MatcheDetailsService } from './../services/matche-details/matche-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatcheDetailsData } from '../models/matchDetails.model';

@Component({
  selector: 'app-matche-details',
  standalone: true,
  imports: [],
  templateUrl: './matche-details.component.html',
  styleUrl: './matche-details.component.css'
})
export class MatcheDetailsComponent implements OnInit {

  matchId?: string;
  matcheDetails?: MatcheDetailsData; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private MatcheDetailsService: MatcheDetailsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.matchId = params['id'];

      if (!this.matchId) {
        console.error('Match ID is required.');
        this.router.navigate(['/leagues']);
      }
    });
    this.MatcheDetailsService.getMatcheDetails(Number(this.matchId)).subscribe(
      data => {
        this.matcheDetails = data;
      });
  }

}
