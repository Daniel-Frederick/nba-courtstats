import { Component } from '@angular/core';
import { playerTeam } from '../../models/player-team';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss',
})
export class PlayerTeamListComponent {
  playerTeams: playerTeam[] = [];
  team: any;

  addTeam(team: any) {}
}
