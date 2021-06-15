import React from 'react';
import { ITeam } from '../../types/types';

import classes from './Team.module.scss';

const Team: React.FC<ITeam> = ({ name, crestUrl, stats }) => (
  <>
    <div className={classes.column}>
      <img src={crestUrl} alt={`${name}-flag`} />
      {name}
    </div>
    <div className={`${classes.column} ${classes.stats}`}>
      <div>{stats.playedGames}</div>
      <div>{stats.goalDifference}</div>
      <div>{stats.points}</div>
    </div>
  </>
);

export default Team;
