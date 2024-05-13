import { Component, Output, OnInit } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrl: './player-team-list.component.scss',
})
export class PlayerTeamListComponent implements OnInit {
  // playerTeams: PlayerTeam[] = [];
  team!: Team;
  players!: any;

  playerTeams: PlayerTeam[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  teamAndPlayers(teamWithPlayers: any): void {
    console.log('teamAndPlayers method please work: ', teamWithPlayers);
    this.addTeam(teamWithPlayers.team);
    // this.addPlayers(teamWithPlayers.players);
  }

  addTeam(team: Team): void {
    console.log('addTeam method worked!');
    this.playerTeams.push({ team, players: ['banana'] });
    console.log('this.playerTeams: ', this.playerTeams);
  }

  // addPlayer(player: any): void {
  //   if (this.playerTeams.length > 0) {
  //     this.playerTeams[this.playerTeams.length - 1].players.push(player);
  //   }

  addPlayer(player: any): void {
    console.log('addplayer method worked!');
    // console.log('addPlayer method has run!');
    // if (this.playerTeams.length > 0) {
    console.log('addPlayer method is inside the if statement!', player);
    this.playerTeams[this.playerTeams.length - 1].players.push(player);
    // Trigger change detection manually
    //this.cdr.detectChanges();
    // }

    // console.log("this.playerTeams: ", this.playerTeams)
  }
}
