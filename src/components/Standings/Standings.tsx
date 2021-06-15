import React, { useState, useEffect } from 'react';
import exampleGroups from '../../api/football-data/example-group';
import Group from './Group';
import classes from './Standings.module.scss';

const Standings: React.FC = () => {
  const [standings, setStandings] = useState<any>([]);
  const fetchGroups = async () => {
    const data = await exampleGroups();
    const groups = data.standings.map((item) => ({
      group: item.group,
      teams: item.table,
    }));
    setStandings(groups);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className={classes.wrapper}>
      {standings.map((group: any) => (
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
