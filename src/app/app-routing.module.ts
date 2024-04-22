import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { AddPlayerComponent } from './features/add-team/add-team.component';
import { TeamTableComponent } from './features/player-team-list/player-team-list.component';

const routes: Routes = [{ path: '', component: TeamTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
