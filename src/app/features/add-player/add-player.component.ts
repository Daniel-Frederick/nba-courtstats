import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent implements OnInit {
  //@Output() addPlayer: EventEmitter<Player> = new EventEmitter<Player>();
  @Input() players!: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    console.log('player in add-player: ', this.players);
  }
}
