import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent implements OnInit {
  //@Output() addPlayer: EventEmitter<Player> = new EventEmitter<Player>();

  //players!: Player[];
//  player!: Player;

  constructor(private playerService: PlayerService) {}

  /*getPlayers(teamID: number) {
    console.log('add-player teamID: ', teamID);

    this.playerService.getPlayers(teamID).then((data: Player[]) => {
      console.log("data: ", data)
      this.players = data;
      console.log('this.player: ', this.players);

      this.addPlayer.emit(this.player)
    });
  }*/

  ngOnInit(): void {}
}
