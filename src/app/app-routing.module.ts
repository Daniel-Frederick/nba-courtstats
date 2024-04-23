import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTeamListComponent } from './features/player-team-list/player-team-list.component';

// For testing
import { AddTeamComponent } from './features/add-team/add-team.component';

const routes: Routes = [{ path: '', component: PlayerTeamListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
