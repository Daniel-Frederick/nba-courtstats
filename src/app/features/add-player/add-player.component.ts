import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent {
  player!: Player;

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
    console.log(`The NBA player inputted: ${this.player}`);

    console.log(this.playerService.getPlayer(this.player));
  }
}
