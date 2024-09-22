import { Routes } from '@angular/router';
import { BigFiveComponent } from './big-five/big-five.component';
import { LeagueComponent } from './league/league.component';
import { MatcheDetailsComponent } from './matche-details/matche-details.component';

export const routes: Routes = [
    {
        path: 'big-five',
        component: BigFiveComponent
    },
    {
        path: 'leagues',
        component: LeagueComponent
    },
    {
        path: 'matche-details',
        component: MatcheDetailsComponent,
    },
    { 
        path: '', redirectTo: '/big-five',
         pathMatch: 'full' 
    },
    {   
        path: '**',
         redirectTo: '/big-five'
    } 
];

