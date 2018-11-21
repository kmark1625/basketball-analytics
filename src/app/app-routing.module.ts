import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
    { path: 'teams', component: TeamsComponent },
    { path: 'title', component: TitleComponent },
    { path: '', redirectTo: '/title', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
