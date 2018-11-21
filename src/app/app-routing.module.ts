import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TitleComponent } from './title/title.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
    { path: 'teams', component: TeamsComponent },
    { path: 'title', component: TitleComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: '', redirectTo: '/tracking', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
