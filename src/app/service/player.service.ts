import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getTeam(team: Team) {
    return `From the service:  ${team}`;
  }
}
