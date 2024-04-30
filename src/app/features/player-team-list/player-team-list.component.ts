import { Component, Output, OnInit } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss',
})
export class PlayerTeamListComponent implements OnInit {
  playerTeams: PlayerTeam[] = [];
  teams: Team[] = [];
  players: Player[] = [];

  ngOnInit(): void {}

  addTeam(team: any): void {
    console.log('playerteam team: ', team);
    this.teams.push(team);
  }

  addPlayer(player: any): void {
    console.log('playerteam player: ', player);
    this.players.push(player);
  }
}
