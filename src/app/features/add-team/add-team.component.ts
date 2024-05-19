import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from '../../models/player';
import { Team } from '../../models/team';
import { PlayerService } from '../../service/player.service';
import { PlayerTeam } from '../../models/player-team';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.scss',
})
export class AddTeamComponent {
  @Output() addTeamAndPlayers: EventEmitter<any> = new EventEmitter<any>();

  teamName: string = 'Atlanta Hawks'; // Default User Input value
  team!: Team; // Team Object being sent to other components
  players!: Player[];
  duplicateTeams: string[] = []; // Keeps track to already entered teams

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
    // Check to see of the team is already entered
    if (!this.duplicateTeams.includes(this.teamName)) {
      try {
        const team = await this.playerService.getTeam(this.teamName);
        this.duplicateTeams.push(team.name)

        const players = await this.playerService.getPlayers(team.teamid);
        console.log('add-team: player ', players);

        // Emit a single object with both team and players
        const teamAndPlayers: any = {
          team,
          players,
        };
        console.log('add-team teamAndPlayers: ', teamAndPlayers);
        this.addTeamAndPlayers.emit(teamAndPlayers);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('This Team has already been entered!');
      // Tell the user that the team has already been entered. No duplicates
    }
  }
}
