import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent implements OnInit {
  @Input() teamid!: number;
  // teamid!: number;
  players!: Player[];

  constructor(private playerService: PlayerService) {}

  getPlayers(teamID: number) {
    console.log('add-player teamID: ', teamID);

    this.playerService.getPlayers(teamID).then((data: any) => {
      this.players = data;
      console.log('this.player: ', this.players);
    });

    //console.log('outside of the promise does this still work? : ', this.players[0].fullName)
  }

  ngOnInit(): void {
    console.log(`please work AddPlayerComponent! ${this.teamid}`);
  }
}
