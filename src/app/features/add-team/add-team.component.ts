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
  @Output() addPlayer: EventEmitter<Player> = new EventEmitter<Player>();
  @Output() addTeam: EventEmitter<Team> = new EventEmitter<Team>();

  teamName!: string; // User Input
  team!: Team; // Team Object being sent to other components
  teamid!: number;
  player!: Player;

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
    console.log('teamName: ', this.teamName);
    if (this.teamName != undefined) {
      this.playerService.getTeam(this.teamName).then((team) => {
        this.team = team;
        console.log('add-team: team: ', this.team);
        console.log('teamid: ', this.team.teamid);

        this.teamid = this.team.teamid;
        this.addTeam.emit(team); // Go to single-team and player-team-list components
      });

      this.playerService.getPlayers(this.teamid).then((player) => {
        this.player = player;
        console.log('add-team: player ', this.player)

        this.addPlayer.emit(player);
      });
    } else {
      console.log('Enter a Team!');
      // Add boolean that tells the user to enter a team
    }
  }
}
