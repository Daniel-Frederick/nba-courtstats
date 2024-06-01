import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Team } from '../models/team';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  response!: any;
  team!: Team;
  players: Player[] = [];

  constructor() {}

  async getTeam(teamName: string): Promise<Team> {
    console.log(`From the service getTeam:  ${teamName}`);

    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/teams',
      params: {
        search: teamName,
      },
      headers: {
        'X-RapidAPI-Key': environment.SECRET_API_KEY,
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      },
    };

    try {
      this.response = await axios.request(options);
      console.log('service - response.data: ', this.response.data);
      //console.log('response.data.response[0]: ', this.response.data.response[0])
      this.team = {
        teamid: this.response.data.response[0].id,
        name: this.response.data.response[0].name,
        logo: this.response.data.response[0].logo,
        conference: this.response.data.response[0].leagues.standard.conference,
        division: this.response.data.response[0].leagues.standard.division
      };
      return this.team;
      //console.log(response.response.length)
    } catch (error) {
      console.error('error: for team (service): ', error);
    }
    return (this.team = {
      teamid: 0,
      name: '',
      logo: '',
      conference: '',
      division: '',
    });
  }

  async getPlayers(teamID: number): Promise<Player[]> {
    console.log(`From the service getPlayers: ${teamID}`);

    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/players',
      params: {
        team: teamID,
        season: '2023', // Make sure to change this so it updates to the current year
      },
      headers: {
        'X-RapidAPI-Key': environment.SECRET_API_KEY, 
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      },
    };

    try {
      this.response = await axios.request(options);
      console.log(this.response);
      console.log(this.response.data.response);

      let player: Player;
      this.players = []; // Initialize this.players as an empty array
      for (let i = 0; i < this.response.data.response.length; i++) {
        player = {
          playerid: this.response.data.response[i].id,
          fullName:
            this.response.data.response[i].firstname +
            ' ' +
            this.response.data.response[i].lastname,
          height:
            this.response.data.response[i].height.feets +
            "' " +
            this.response.data.response[i].height.inches +
            `"`,
          college: this.response.data.response[i].college,
          position: this.response.data.response[i].leagues.standard.pos,
          NBAstartYear: this.response.data.response[i].nba.start,
          weight: this.response.data.response[i].weight.pounds,
          DOB: this.response.data.response[i].birth.date,
          country: this.response.data.response[i].birth.country,
        };

        this.players.push(player);
      }

      console.log('players array (service): ', this.players);

      return this.players;
    } catch (error) {
      console.log('error: for player (service): ', error);
      return [
        {
          playerid: NaN,
          fullName: '',
          height: '',
          college: '',
          position: '',
          NBAstartYear: NaN,
          weight: NaN,
          DOB: '',
          country: '',
        },
      ];
    }
  }
}
