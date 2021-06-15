import React, { useState, useEffect } from 'react';
import exampleGroups from '../../api/football-data/example-group';
import { IGroup } from '../../types/types';

import Group from './Group';
import classes from './Standings.module.scss';

const Standings: React.FC = () => {
  const [standings, setStandings] = useState<IGroup[]>();
  const fetchGroups = async () => {
    const data = await exampleGroups();
    const groups = data.standings.map((item) => ({
      group: item.group,
      teams: item.table.map((team) => ({
        ...team.team,
        stats: {
          draw: team.draw,
          goalDifference: team.goalDifference,
          goalAgainst: team.goalsAgainst,
          goalsFor: team.goalsFor,
          lost: team.lost,
          playedGames: team.playedGames,
          points: team.points,
          position: team.position,
          won: team.won,
        },
      })),
    }));
    setStandings(groups);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className={classes.wrapper}>
      {standings?.map((group: IGroup) => (
        <div className={classes.group} key={group.group}>
          <div className={classes['panel-head']}>
            <div className={classes.title}>
              {group.group.split('_').join(' ')}
            </div>
            <div className={classes['stats-heading']}>
              <div>M</div>
              <div>G</div>
              <div>P</div>
            </div>
          </div>
          <Group teams={group.teams} />
        </div>
      ))}
    </div>
  );
};

export default Standings;
