import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss',
})
export class SinglePlayerComponent implements OnInit {
  @Input() players!: any; // array of arrays

  ngOnInit(): void {}

  getPlayers(players: any) {
    console.log('singleplayercomp: players param: ', players);
    this.players = players;
  }
}
