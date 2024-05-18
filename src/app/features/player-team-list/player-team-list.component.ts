// import { Component, Output, EventEmitter, OnInit } from '@angular/core';
// import { PlayerTeam } from '../../models/player-team';
// import { Team } from '../../models/team';
// import { Player } from '../../models/player';

// import { ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-player-team-list',
//   templateUrl: './player-team-list.component.html',
//   styleUrl: './player-team-list.component.scss',
// })
// export class PlayerTeamListComponent implements OnInit {
//   @Output() sendPlayers: EventEmitter<any> = new EventEmitter<any>();
//   @Output() sendTeam: EventEmitter<Team> = new EventEmitter<Team>();

//   // playerTeams: PlayerTeam[] = [];
//   team!: Team;
//   players!: any;

//   playerTeams: any[] = []; // MUST POPULATE THIS IN ORDER FOR EMITTING TO WORK - THIS IS CUZ OF THE NGFOR LOOP IN HTML

//   constructor(private cdr: ChangeDetectorRef) {}

//   ngOnInit(): void {}

//   addTeamAndPlayers(teamWithPlayers: any): void {
//     console.log('teamAndPlayers method please work: ', teamWithPlayers);
//     console.log('teamWithPlayers.team: ', teamWithPlayers.team);
//     console.log('teamWithPlayers.players: ', teamWithPlayers.players);
//     const teaming = teamWithPlayers.team;
//     const playering = teamWithPlayers.players;
//     const whatidoing = {
//       teamWithPlayers.team,
//       teamWithPlayers.players
//     }

//     console.log()
//     this.playerTeams.push(whatidoing);

//     // this.addTeam(teamWithPlayers.team);
//     // this.addPlayer(teamWithPlayers.players);

//     // // Emiting team and players to respective components
//     // this.sendPlayers.emit(teamWithPlayers.team);
//     // this.sendPlayers.emit(teamWithPlayers.players);
//   }

//   addTeam(team: Team): void {
//     console.log('addTeam method worked! team: ', team);
//     this.playerTeams.push({ team, players: [] });
//     this.sendPlayers.emit(team);

//     // console.log('this.playerTeams: ', this.playerTeams);

//     // console.log('this.playerTeams: ', this.playerTeams);
//   }

//   // addPlayer(player: any): void {
//   //   if (this.playerTeams.length > 0) {
//   //     this.playerTeams[this.playerTeams.length - 1].players.push(player);
//   //   }

//   addPlayer(player: any): void {
//     console.log('addplayer method worked! player: ', player);
//     this.playerTeams[this.playerTeams.length - 1].players.push(player);
//     this.sendPlayers.emit(player);
//   }
// }

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PlayerTeam } from '../../models/player-team';
import { Team } from '../../models/team';
import { Player } from '../../models/player';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-player-team-list',
  templateUrl: './player-team-list.component.html',
  styleUrls: ['./player-team-list.component.scss'], // Corrected from styleUrl to styleUrls
})
export class PlayerTeamListComponent implements OnInit {
  @Output() sendPlayers: EventEmitter<Player[]> = new EventEmitter<Player[]>();
  @Output() sendTeam: EventEmitter<Team> = new EventEmitter<Team>();

  playerTeams: { team: any; players: any }[] = []; // Structured type

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  addTeamAndPlayers(teamWithPlayers: { team: any; players: any }): void {
    console.log('teamAndPlayers method called: ', teamWithPlayers);

    this.playerTeams.push(teamWithPlayers);
    console.log('Current playerTeams array: ', this.playerTeams);

    // Emit the team and players
    this.sendTeam.emit(teamWithPlayers.team);
    this.sendPlayers.emit(teamWithPlayers.players);
  }

  // Both not getting called
  addTeam(team: Team): void {
    console.log('addTeam method called! team: ', team);
    this.playerTeams.push({ team, players: [] });
    console.log('Current playerTeams array: ', this.playerTeams);
    this.sendTeam.emit(team);
  }

  addPlayer(player: Player): void {
    console.log('addPlayer method called! player: ', player);
    if (this.playerTeams.length > 0) {
      this.playerTeams[this.playerTeams.length - 1].players.push(player);
      console.log('Current playerTeams array: ', this.playerTeams);
      this.sendPlayers.emit(
        this.playerTeams[this.playerTeams.length - 1].players
      );
    }
  }
}
