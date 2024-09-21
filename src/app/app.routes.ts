import { Routes } from '@angular/router';
import { BigFiveComponent } from './big-five/big-five.component';
import { LeagueComponent } from './league/league.component';

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
        path: '', redirectTo: '/big-five',
         pathMatch: 'full' 
    },
    {   
        path: '**',
         redirectTo: '/big-five'
    } 
];

