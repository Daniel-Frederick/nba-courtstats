import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss',
})
export class SinglePlayerComponent implements OnInit {
  @Input() players!: any; // array of arrays

  ngOnInit(): void {
    console.log('player in single-player: ', this.players);
    //this.players = [this.players[this.players.length - 1]];
    //this.players = [this.getLastArray()];
    console.log('singleplayercomp: players param: ', this.players);
    this.players = this.players;
  }

  getLastArray(): any {
    return this.players?.length ? this.players[this.players.length - 1] : [];
  }

  getPlayers(players: any) {
    console.log('singleplayercomp: players param: ', players);
    this.players = players;
  }
}
