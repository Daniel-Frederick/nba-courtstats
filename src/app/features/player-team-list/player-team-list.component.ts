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

  addTeam(team: Team): void {
    this.playerTeams.push({ team, players: [] });
  }

  // addPlayer(player: any): void {
  //   if (this.playerTeams.length > 0) {
  //     this.playerTeams[this.playerTeams.length - 1].players.push(player);
  //   }

  addPlayer(player: any): void {
    // console.log('addPlayer method has run!');
    // if (this.playerTeams.length > 0) {
    console.log('addPlayer method is inside the if statement!', player);
    this.playerTeams[this.playerTeams.length - 1].players.push(player);
    // Trigger change detection manually
    this.cdr.detectChanges();
    // }

    // console.log("this.playerTeams: ", this.playerTeams)
  }

  // old code but not sure what to do with it
  // ngOnInit(): void {
  //   // console.log('playerteam team: ', this.team); // going to yell at me
  //   // console.log('playerteam player: ', this.players); // going to yell at me

  //   // const playerteam = {
  //   //   players: this.players,
  //   //   team: this.team,
  //   // };

  //   // this.playerTeams.push(playerteam);
  // }

  // addTeam(team: any): void {
  //   console.log('playerteam team: ', team);
  //   this.team = team;
  //   // this.teams.push(team);
  // }

  // addPlayer(player: any): void {
  //   console.log('playerteam player: ', player);
  //   this.players = player;
  //   // this.players.push(player);
  // }
}
