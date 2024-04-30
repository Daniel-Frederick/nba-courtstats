import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTeamListComponent } from './features/player-team-list/player-team-list.component';
import { FullPlayerTeamListComponent } from './features/full-player-team-list/full-player-team-list.component';

const routes: Routes = [{ path: '', component: PlayerTeamListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
