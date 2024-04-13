import { Component } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {
  player!: string;

  async onSubmit() {
    console.log(`The NBA player inputted: ${this.player}`)
  }
}
