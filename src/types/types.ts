export interface ITeamStats {
  draw: number;
  goalAgainst: number;
  goalDifference: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  won: number;
}

export interface ITeam {
  id: number;
  name: string;
  crestUrl: string;
  stats?: ITeamStats;
}

export interface ITeams {
  teams: ITeam[];
}

export interface IGroup {
  group: string;
  teams: ITeam[];
}
