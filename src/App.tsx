import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './App.module.scss';

import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { setTeams } from './store/slices/teamSlice';

import exampleTeams from './api/football-data/example-teams';

import Navigation from './components/Navigation/Navigation';
import MySquad from './components/MySquad/MySquad';
import Matches from './components/Matches/Matches';
import Standings from './components/Standings/Standings';

const App: React.FC = () => {
  const teams = useAppSelector((state) => state.teams);
  const dispatch = useAppDispatch();

  const fetchTeams = async () => {
    const response = await exampleTeams();
    const formattedTeams = response.teams.map((team) => ({
      team: {
        id: team.id,
        name: team.name,
        crestUrl: team.crestUrl,
      },
    }));
    dispatch(setTeams(formattedTeams));
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <>
      <Navigation />
      <div className={classes.wrapper}>
        <Switch>
          <Route path="/mysquad">
            <MySquad />
          </Route>
          <Route path="/matches">
            <Matches />
          </Route>
          <Route path="/standings">
            <Standings />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
