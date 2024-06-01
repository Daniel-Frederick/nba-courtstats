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
      const shortResponse = this.response.data.response[0];

      this.team = {
        // teamid: this.response.data.response[0].id,
        teamid: shortResponse.id,
        name: shortResponse.name,
        logo: shortResponse.logo,
        conference: shortResponse.leagues.standard.conference ?? "-",
        division: shortResponse.leagues.standard.division ?? "-"
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
        const shortResponse = this.response.data.response[i];

        // Finish fixing the height property 
        let playerHeight: string = "-";
        if(shortResponse.height.feets && shortResponse.height.inches) {
          playerHeight = shortResponse.height.feets + "' " + shortResponse.height.inches + `"`; 
        }

        let playerStartYear: string = String(shortResponse.nba.start);
        if(shortResponse.nba.start === 0) {
          playerStartYear = "-";
        }

        player = {
          playerid: shortResponse.id,
          fullName: shortResponse.firstname + ' ' + shortResponse.lastname,
          height: playerHeight, 
          college: shortResponse.college ?? "-",
          position: shortResponse.leagues.standard.pos ?? "-",
          NBAstartYear: playerStartYear ?? "-",
          weight: shortResponse.weight.pounds ?? "-",
          DOB: shortResponse.birth.date ?? "-",
          country: shortResponse.birth.country ?? "-",
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
          NBAstartYear: '',
          weight: NaN,
          DOB: '',
          country: '',
        },
      ];
    }
  }
}