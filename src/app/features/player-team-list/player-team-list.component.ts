import { Component } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss',
})
export class PlayerTeamListComponent {
  playerTeams: PlayerTeam[] = [];
  teams: Team[] = [];
  players: Player[] = [];
  //team: any;

  addTeam(team: Team): void {
    console.log("team: ", team);
    this.teams.push(team);
  }

  addPlayer(player: any): void {
    console.log("player: ", player)
    this.players.push(player);
  }
}
