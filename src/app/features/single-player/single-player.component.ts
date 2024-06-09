import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss',
})
export class SinglePlayerComponent {
  @Input() players!: Player[]; // array of arrays

  isSmallScreen: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  getPlayers(players: Player[]) {
    console.log('singleplayercomp: players param: ', players);
    this.players = players;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 1056;
  }
}
