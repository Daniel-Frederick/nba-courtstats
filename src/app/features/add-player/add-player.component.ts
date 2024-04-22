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
  player!: Player;
  testPlayer!: any;

  constructor(private playerService: PlayerService) {}

  getPlayers(teamID: number) {
    // this.teamid = teamID;
    console.log('add-player teamID: ', teamID);
    console.log('add-player this.teamid: ', this.teamid);

    this.playerService.getPlayers(teamID).then((data: any) => {
      this.testPlayer = data;
      console.log('this.player: ', this.testPlayer);
    });
  }

  ngOnInit(): void {
    console.log(`please work AddPlayerComponent! ${this.teamid}`);
  }
}
