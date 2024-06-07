import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Team } from '../models/team';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  response!: AxiosResponse;
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
      console.log('typeof response: ', typeof this.response);
      // console.log('service - response.data: ', this.response.data);
      const shortResponse = this.response.data.response[0];

      this.team = {
        teamid: shortResponse.id,
        name: shortResponse.name,
        logo: shortResponse.logo,
        conference: shortResponse.leagues.standard.conference ?? "-",
        division: shortResponse.leagues.standard.division ?? "-"
      };
      return this.team; 
    } catch (error) {
      console.error('error: for team (service): ', error);
    }
    return (this.team = {
      teamid: -1,
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
        season: new Date().getFullYear() - 1,
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

        // Date of Birth formatting
        let dobFormatted: string = "-"; 
        if(shortResponse.birth.date) {
        // MM/DD/YYYY
        dobFormatted = shortResponse.birth.date?.slice(5, 7) + '/' + shortResponse.birth.date?.slice(8, 10) + '/' + shortResponse.birth.date?.slice(0, 4);

        // Removes leading zeros
        // Works but website loads too fast to change all DOBs
        // if(dobFormatted.substring(0, 1) === '0' && dobFormatted.substring(3, 4) === '0') {
        //   dobFormatted = dobFormatted.slice(3,4);
        //   dobFormatted = dobFormatted.slice(1);
        // }
        // else if(dobFormatted.substring(0, 1) === '0') {
        //   dobFormatted = dobFormatted.slice(1);
        // }
        // else if(dobFormatted.substring(3, 4) === '0') {
        //   dobFormatted = dobFormatted.slice(3,4);
        // }
        }

        player = {
          playerid: shortResponse.id,
          fullName: shortResponse.firstname + ' ' + shortResponse.lastname,
          height: playerHeight, 
          college: shortResponse.college ?? "-",
          position: shortResponse.leagues.standard.pos ?? "-",
          NBAstartYear: playerStartYear ?? "-",
          weight: shortResponse.weight.pounds ?? "-",
          DOB: dobFormatted,
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