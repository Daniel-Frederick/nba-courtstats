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
  @Output() addTeamAndPlayers: EventEmitter<PlayerTeam> = new EventEmitter<PlayerTeam>();

  teams: string[] = [
    'Atlanta Hawks',
    'Boston Celtics',
    'Brooklyn Nets',
    'Charlotte Hornets',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'Los Angeles Clippers',
    'Los Angeles Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia 76ers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards'
  ]; 

  teamName: string = this.teams[0]; // Default User Input value
  team!: Team; // Team Object being sent to other components
  duplicateTeams: string[] = []; // Keeps track to already entered teams
  isLoading: boolean = false;

  constructor(private playerService: PlayerService) {}

  async onSubmit() {
    try {
      // Loading Started
      this.isLoading = true;

      // Remove the current team from the list so there are no duplicates
      this.teams = this.teams.filter(team => team !== this.teamName);

      const team = await this.playerService.getTeam(this.teamName);
      // this.duplicateTeams.push(team.name)

      const players = await this.playerService.getPlayers(team.teamid);
      console.log('add-team: player ', players);

      // Emit a single object with both team and players
      const teamAndPlayers: PlayerTeam = {
        team,
        players,
      };
      console.log('add-team teamAndPlayers: ', teamAndPlayers);
      this.addTeamAndPlayers.emit(teamAndPlayers);

      // Set teamName to next team in array
      this.teamName = this.teams[0];

      // Loading stopped
      this.isLoading = false;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
