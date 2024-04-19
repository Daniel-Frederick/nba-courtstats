import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { AddPlayerComponent } from './features/add-player/add-player.component';
import { TeamTableComponent } from './features/team-table/team-table.component';

const routes: Routes = [
  { path: '', component: TeamTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
