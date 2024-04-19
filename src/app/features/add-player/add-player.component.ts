import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from '../../models/player';
import { Team } from '../../models/team';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent {
  @Output() output: EventEmitter<any> = new EventEmitter();

  teamName!: string;
  team!: Team;
  player!: Player[];

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
//    console.log(`The NBA player inputted: ${this.player}`);

    //console.log("Team API: ", this.playerService.getTeam(this.team));

    console.log('teamName: ', this.teamName)
    if(this.teamName != undefined) {
      this.playerService.getTeam(this.teamName).then(data => {
        this.team = data;
        //console.log('plz work: value: ', this.team)
        //console.log('plz work: value: ', this.team.name)
       //console.log('plz work: value: ', this.team.logo)
      })
      this.output.emit(this.team);
    }
    else {
      console.log('Enter a Team!')
      // Add boolean that tells the user to enter a team
    }
  }
}
