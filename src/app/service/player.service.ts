import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Team } from '../models/team';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  async getTeam(team: Team) {
    console.log(`From the service:  ${team}`);

    const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/teams',
      params: {
        search: team
      },
      headers: {
        'X-RapidAPI-Key': '5ddd9f18demshd5e344dba252ffep108a80jsn49c46f70d185',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    }

    let response: any;
    try {
      response = await axios.request(options);
      console.log(response.data);
    }
    catch(error) {
      console.error(error);
    }
    return response;
  }

  getPlayer(team: Team) {
    return team;
  }
}


