import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss',
})
export class SinglePlayerComponent implements OnInit {
  @Input() players!: Player[]; // array of arrays

  playerz!: Player;

  ngOnInit(): void {
    console.log('player in single-player: ', this.players);
    this.players = [this.players[this.players.length - 1]];
    console.log('singleplayer this.player: ', this.playerz);
  }

  getLastArray(): any {
    // Check if players is defined and has at least one array
    if (
      this.players &&
      this.players.length > 0 &&
      Array.isArray(this.players[this.players.length - 1])
    ) {
      console.log(
        'why does this not work? : ',
        this.players[this.players.length - 1]
      );
      return this.players[this.players.length - 1]; // Return the last array
    } else {
      return []; // Return an empty array if players is not defined or empty
    }
  }
}
