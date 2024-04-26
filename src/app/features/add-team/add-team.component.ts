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
  @Output() addPlayers: EventEmitter<Player[]> = new EventEmitter<Player[]>();
  @Output() addTeam: EventEmitter<Team> = new EventEmitter<Team>();

  teamName!: string; // User Input
  team!: Team; // Team Object being sent to other components
  teamid!: number;
  players!: Player[];

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
    console.log('teamName: ', this.teamName);
    if (this.teamName !== undefined) {
      try {
        const team = await this.playerService.getTeam(this.teamName);
        console.log('add-team: team: ', team);
        console.log('teamid: ', team.teamid);
        this.teamid = team.teamid;
        this.addTeam.emit(team);

        console.log('is this working? teamid: ', this.teamid);
        const players = await this.playerService.getPlayers(this.teamid);
        console.log('add-team: player ', players);
        this.addPlayers.emit(players);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('NO TEAM ENTERED!');
    }
  }
}
