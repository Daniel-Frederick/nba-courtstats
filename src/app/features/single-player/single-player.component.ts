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
    if(this.team == undefined) console.log('undefined: ', this.team)
    console.log('team from single-player comp: ', this.team);
  }

}
