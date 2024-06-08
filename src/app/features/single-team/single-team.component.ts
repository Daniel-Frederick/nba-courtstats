import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrl: './single-team.component.scss',
})
export class SingleTeamComponent {
  @Input() team!: Team;

  getTeam(team: Team) {
    console.log('singleteamcomp: team param: ', team);
    console.log('this.team: ', this.team);
    this.team = team;
  }
}
