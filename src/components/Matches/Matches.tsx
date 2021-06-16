/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import exampleMatches from '../../api/football-data/example-matches';

import classes from './Matches.module.scss';

const Matches: React.FC = () => {
  const [matches, setMatches] = useState<any>();

  const fetchMatches = async () => {
    const response = await exampleMatches();
    setMatches(response.matches);
  };
  useEffect(() => {
    fetchMatches();
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.matches}>
        {matches?.map(
          (match: any) =>
            match.homeTeam.name && (
              <div key={match.id} className={classes.match}>
                <div className={classes['home-team']}>
                  {match.homeTeam?.name}
                  <div className={classes.score}>
                    {match.score?.fullTime?.homeTeam}
                  </div>
                </div>
                <div className={classes['away-team']}>
                  {match.awayTeam?.name}
                  <div className={classes.score}>
                    {match.score?.fullTime?.awayTeam}
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Matches;
