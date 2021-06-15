import React from 'react';
import { TeamProps, GeneralTeamDataProps } from '../../types/types';

import Team from './Team';
import classes from './Group.module.scss';

type Props = {
  teams: TeamDataProps[];
};

interface TeamDataProps {
  team: GeneralTeamDataProps;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  won: number;
}

const Group: React.FC<Props> = ({ teams }) => {
  const formattedTeamData = teams.map(
    ({
      team: { id, name, crestUrl },
      goalDifference,
      goalsAgainst,
      goalsFor,
      lost,
      playedGames,
      points,
      position,
      won,
    }: TeamDataProps) => ({
      id,
      name,
      crestUrl,
      stats: {
        goalDifference,
        goalsAgainst,
        goalsFor,
        lost,
        playedGames,
        points,
        position,
        won,
      },
    }),
  );

  return (
    <ul className={classes.group}>
      {formattedTeamData.map(({ id, name, crestUrl, stats }: TeamProps) => (
        <li key={id}>
          <Team id={id} name={name} crestUrl={crestUrl} stats={stats} />
        </li>
      ))}
    </ul>
  );
};

export default Group;
