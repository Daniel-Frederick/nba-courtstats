import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getPlayer(player: Player) {
    return `From the service:  ${player}`;
  }
}
