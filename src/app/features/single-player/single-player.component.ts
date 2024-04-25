import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss',
})
export class SinglePlayerComponent implements OnInit {
  @Input() team!: Team;

  ngOnInit(): void {}
}
