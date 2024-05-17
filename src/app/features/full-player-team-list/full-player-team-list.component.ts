import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@Component({
  selector: 'app-full-player-team-list',
  templateUrl: './full-player-team-list.component.html',
  styleUrls: ['./full-player-team-list.component.scss'],
})
export class FullPlayerTeamListComponent implements OnInit {
  @Input() team!: Team;
  @Input() players!: Player[];

  @Output() sendPlayers2: EventEmitter<any> = new EventEmitter<Player[]>();
  @Output() sendTeam2: EventEmitter<any> = new EventEmitter<Team>();

  ngOnInit(): void {
    console.log('FullPlayerTeamListComponent this.team: ', this.team);
    console.log('FullPlayerTeamListComponent this.players: ', this.players);
  }

  sendTeamAgain(team: any): void {
    console.log('Team', team);
    this.sendTeam2.emit(team);
  }

  sendPlayersAgain(players: any): void {
    console.log('Players', players);
    this.sendPlayers2.emit(players);
  }
}
