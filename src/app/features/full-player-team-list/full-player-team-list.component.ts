import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@Component({
  selector: 'app-full-player-team-list',
  templateUrl: './full-player-team-list.component.html',
  styleUrl: './full-player-team-list.component.scss',
})
export class FullPlayerTeamListComponent {
  @Input() team!: Team;
  @Input() players!: Player[];

  ngOnInit(): void {
    console.log('FullPlayerTeamListComponent this.team: ', this.team);
    console.log('FullPlayerTeamListComponent this.players: ', this.players);
  }

  // [team]="team" [players]="players"

  // @Output() playerteams: EventEmitter<any> = new EventEmitter<any>();
  // @Input() playerTeam!: any;
  // playerTeams: PlayerTeam[] = [];
  // team: Team[] = [];
  // players: Player[] = [];
  // addTeam(team: any) {
  //   console.log("fullcomp team: ", team)
  //   this.teams.push(team);
  // }
  // addPlayer(player: any) {
  //   console.log("fullcomp player: ", player)
  //   this.players.push(player)
  // }
}
