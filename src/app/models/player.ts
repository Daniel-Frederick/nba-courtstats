export class Player {
  // All current stats
  playerid!: number; // Allows me to to look up players in the API
  fullName!: string; // First and last name
  height!: string; // In the format: 6'5"
  college!: string; // The college the player went throw;
  position!: string; // The position the player has
  NBAstartYear!: number; // The year the player started in the NBA
  //jerseyNum!: number; // The player's current jersey number // Null jersey values?
  weight!: number; // How much the player weighs
  DOB!: string; // Day Of Birth
  country!: string; // Where the player is from
}
