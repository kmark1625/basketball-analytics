import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';
import { TitleComponent } from './title/title.component';
import { TrackingComponent } from './tracking/tracking.component'
import { FormsModule } from '@angular/forms';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

import { MatTableModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ResultsComponent } from './results/results.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TitleComponent,
    TrackingComponent,
    TransactionFormComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
