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
    if(this.team != undefined){
    let content = `
      <div>
        <h2>{{ team.name }}<h2>
        <img src="${this.team.logo}" alt="${this.team.name} Logo">
      </div>
      `
      /*
       1. Create div as a wrapper for the title and player table
       2. add context(title) to the beginning of the new div
       3. Create player table and append to the new div
       4. append table to the already made section tag
       */
    }
    else {
      console.log('team = undefined :(')
    }

 }

}
