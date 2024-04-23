import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from '../../models/player';
import { Team } from '../../models/team';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss',
})
export class AddTeamComponent {
  //@Output() output: EventEmitter<any> = new EventEmitter<any>();
  @Output() teamid: EventEmitter<number> = new EventEmitter<number>();

  teamName!: string;
  team!: Team;

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
    console.log('teamName: ', this.teamName);
    if (this.teamName != undefined) {
      this.playerService.getTeam(this.teamName).then((data) => {
        this.team = data;
        console.log('add-team: team: ', this.team);
        console.log('teamid: ', this.team.teamid);

        const teamid = this.team.teamid;
        this.teamid.emit(teamid);
      });
    } else {
      console.log('Enter a Team!');
      // Add boolean that tells the user to enter a team
    }
  }
}
