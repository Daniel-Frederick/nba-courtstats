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
  //  @Output() addPlayers: EventEmitter<Player[]> = new EventEmitter<Player[]>();
  // @Output() addPlayers: EventEmitter<any> = new EventEmitter<any>();
  // @Output() addTeam: EventEmitter<Team> = new EventEmitter<Team>();
  @Output() addTeamAndPlayers: EventEmitter<any> = new EventEmitter<any>();

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
        this.teamid = team.teamid;

        const players = await this.playerService.getPlayers(this.teamid);
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
      console.log('NO TEAM ENTERED!');
    }
  }

  // async onSubmit() {
  //   console.log('teamName: ', this.teamName);
  //   if (this.teamName !== undefined) {
  //     try {
  //       const team = await this.playerService.getTeam(this.teamName);
  //       console.log('add-team: team: ', team);
  //       console.log('teamid: ', team.teamid);
  //       this.teamid = team.teamid;
  //       this.addTeam.emit(team);

  //       const players = await this.playerService.getPlayers(this.teamid);
  //       console.log('add-team: player ', players);
  //       this.addPlayers.emit(players);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   } else {
  //     console.log('NO TEAM ENTERED!');
  //   }
  // }
}
