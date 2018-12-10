import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TitleComponent } from './title/title.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
    { path: 'teams', component: TeamsComponent },
    { path: 'title', component: TitleComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: 'results', component: ResultsComponent},
    { path: '', redirectTo: '/tracking', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
