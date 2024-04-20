import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../../models/team'

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss'
})
export class SinglePlayerComponent implements OnInit, OnChanges {
  @Input() team!: Team;

  ngOnInit(): void {
    console.log('single-player in ngOnInit')
 }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('single-player in Changes')
    if(this.team){
      const section = document.querySelector('#tables-section')
      if(section) {
      const teamTitleTag = document.createElement('div');

      teamTitleTag.innerHTML = `
        <div>
          <h2>{{ team.name }}<h2>
          <img src="${this.team.logo}" alt="${this.team.name} Logo">
        </div>
        `
        section.appendChild(teamTitleTag);
      }
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
