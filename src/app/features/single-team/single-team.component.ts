import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrl: './single-team.component.scss',
})
export class SingleTeamComponent implements OnInit {
  @Input() team!: Team;

  ngOnInit(): void {
    console.log("team in single-team: ", this.team)
  }

}
