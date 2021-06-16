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
    <div>
      All Matches
      {matches?.map(
        (match: any) =>
          match.homeTeam.name && (
            <div key={match.id} className={classes.match}>
              {console.log(match)}
              <div>{match.homeTeam?.name}</div>
              <div>{match.awayTeam.name}</div>
              <div>
                SCORE:
                {match.score?.fullTime?.homeTeam}
                {match.score?.fullTime?.awayTeam}
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default Matches;
