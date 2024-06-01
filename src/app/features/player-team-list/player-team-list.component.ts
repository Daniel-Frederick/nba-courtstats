import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
  playerTeams: any[] = []; 

  ngOnInit(): void {}

  addTeamAndPlayers(teamWithPlayers: any): void {
    console.log('teamAndPlayers method called: ', teamWithPlayers);

    this.playerTeams.push(teamWithPlayers);
    console.log('Current playerTeams array: ', this.playerTeams);
  }
}
