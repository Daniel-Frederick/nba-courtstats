import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { AddPlayerComponent } from './features/add-player/add-player.component';
import { SinglePlayerComponent } from './features/single-player/single-player.component';
import { TeamTableComponent } from './features/team-table/team-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPlayerComponent,
    SinglePlayerComponent,
    TeamTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
