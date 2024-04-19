import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/team'

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss'
})
export class SinglePlayerComponent implements OnInit {
  @Input() team!: Team;

  ngOnInit(): void {
    console.log('single-player team: ', this.team)
 }

}
