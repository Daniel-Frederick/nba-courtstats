import { Component } from '@angular/core';
import { Player } from '../../models/player'

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {
  player!: Player;

  async onSubmit() {
    console.log(`The NBA player inputted: ${this.player}`)
  }
}
