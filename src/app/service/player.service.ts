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
    console.log(`From the service:  ${teamName}`);

    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/teams',
      params: {
        search: teamName
      },
      headers: {
        'X-RapidAPI-Key': '5ddd9f18demshd5e344dba252ffep108a80jsn49c46f70d185',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    }

    try {
      this.response = await axios.request(options);
      console.log('service - response.data: ', this.response.data);
      //console.log('response.data.response[0]: ', this.response.data.response[0])
      this.team = {
        teamid: this.response.data.response[0].id,
        name: this.response.data.response[0].name,
        logo: this.response.data.response[0].logo
      }
      return this.team;
      //console.log(response.response.length)
    }
    catch(error) {
      console.error(error);
    }
      return this.team = {
        teamid: 0,
        name: '',
        logo: ''
      }
  }

  getPlayer(team: Team) {
    return team;
  }
}


