import { Injectable } from '@angular/core';
import { Player } from '../models/player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayer(player: Player) {
    return console.log("from the service: ", player)
  }
}
