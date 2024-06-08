import { Component } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss', 
})
export class PlayerTeamListComponent {
  playerTeams: PlayerTeam[] = []; 

  addTeamAndPlayers(teamWithPlayers: PlayerTeam): void {
    // console.log('teamAndPlayers method called: ', teamWithPlayers);

    // this.playerTeams.push(teamWithPlayers);
    this.playerTeams.unshift(teamWithPlayers);
    // console.log('Current playerTeams array: ', this.playerTeams);
  }
}
