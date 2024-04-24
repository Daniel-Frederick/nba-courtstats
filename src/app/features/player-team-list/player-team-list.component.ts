import { Component } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';
import { Team } from '../../models/team';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss',
})
export class PlayerTeamListComponent {
  playerTeams: PlayerTeam[] = [];
  teams: Team[] = [];
  team: any;

  addTeam(team: any) {
    this.team = team;
    console.log(this.team);
    this.teams.push(this.team);
  }
}
