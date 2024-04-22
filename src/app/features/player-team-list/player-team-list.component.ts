import { Component } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss',
})
export class TeamTableComponent {
  teams: Team[] = [];

  addTeam(team: any) {
    this.teams.push(team);
  }
}
