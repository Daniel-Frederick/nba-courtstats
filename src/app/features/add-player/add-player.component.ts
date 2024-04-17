import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { Team } from '../../models/team';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent {
  team!: Team;
  player!: Player[];

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
//    console.log(`The NBA player inputted: ${this.player}`);

    console.log(this.playerService.getTeam(this.team));

    // If team is undefined, then tell the user to enter a team
    // Will only happen if they do not pick at the very start
  }
}
