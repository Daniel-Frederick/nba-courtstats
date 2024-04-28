import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { SinglePlayerComponent } from './features/single-player/single-player.component';
import { PlayerTeamListComponent } from './features/player-team-list/player-team-list.component';
import { SingleTeamComponent } from './features/single-team/single-team.component';
import { AddTeamComponent } from './features/add-team/add-team.component';
import { FullPlayerTeamListComponent } from './features/full-player-team-list/full-player-team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinglePlayerComponent,
    PlayerTeamListComponent,
    SingleTeamComponent,
    AddTeamComponent,
    FullPlayerTeamListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
