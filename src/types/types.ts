export interface TeamMatchStatsProps {
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
}

export interface GeneralTeamDataProps {
  id: string;
  name: string;
  crestUrl: string;
}

export interface TeamProps {
  id: string;
  name: string;
  crestUrl: string;
  stats: TeamMatchStatsProps;
}
