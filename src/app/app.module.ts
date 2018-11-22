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

import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TitleComponent,
    TrackingComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
