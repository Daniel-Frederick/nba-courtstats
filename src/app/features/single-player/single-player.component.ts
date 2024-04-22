import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrl: './single-player.component.scss',
})
export class SinglePlayerComponent implements OnInit {
  @Input() team!: Team;

  ngOnInit(): void {
    // Get rid of:
    // this.team = {
    //    teamid: 1,
    //    name: "Atlanta Hawks",
    //    logo: "LOGO"
    //   }
    // console.log('single-player in ngOnInit')
    // console.log('is this working or not ngOnInit? ??????')
    // console.log('single-player in Changes')
    // if(this.team != undefined){
    //   const section = document.querySelector('#tables-section')
    //   console.log(section)
    //   if(section) {
    //   const teamTitleTag = document.createElement('div');
    //   teamTitleTag.innerHTML = `
    //     <div>
    //       <h2>{{ team.name }}<h2>
    //       <img src="${this.team.logo}" alt="${this.team.name} Logo">
    //     </div>
    //     `;
    //     //section.innerHTML = ""; // Clear existing content, I don't think I want this. If I want to display multiple at the same time I will need to get rid of this
    //     section.appendChild(teamTitleTag);
    //   } else {
    //     console.log('section w/ id was not found :(')
    //   }
    //   /*
    //    1. Create div as a wrapper for the title and player table
    //    2. add context(title) to the beginning of the new div
    //    3. Create player table and append to the new div
    //    4. append table to the already made section tag
    //    */
    // }
    // else {
    //   console.log('team = undefined :(')
    // }
  }
}
