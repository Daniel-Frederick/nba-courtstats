import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Team } from '../models/team';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  response!: any;
  team!: Team;

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
        'X-RapidAPI-Key': '5ddd9f18demshd5e344dba252ffep108a80jsn49c46f70d185',
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
      };
      return this.team;
      //console.log(response.response.length)
    } catch (error) {
      console.error(error);
    }
    return (this.team = {
      teamid: 0,
      name: '',
      logo: '',
    });
  }

  async getPlayers(teamID: number): Promise<Player[]> {
    console.log(`From the service getPlayers: ${teamID}`);

    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/players',
      params: {
        team: teamID,
        season: '2023',
      },
      headers: {
        'X-RapidAPI-Key': '5ddd9f18demshd5e344dba252ffep108a80jsn49c46f70d185',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      },
    };

    let players: Player[] = [];

    try {
      this.response = await axios.request(options);
      console.log(this.response);
      console.log(this.response.data.response);

      let player: Player;
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
        //console.log('Player object in service for loop: ', player);

        players.push(player);
      }

      console.log('players array (service): ', players);

      return players;
    } catch (error) {
      console.log(error);
    }

    return (players = [
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
    ]);
  }
}
