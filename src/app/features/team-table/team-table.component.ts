import { Component } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.scss'
})
export class TeamTableComponent {
  teams: Team[] = [];

  addTeam(team: any) {
    this.teams.push(team);
  }
}
