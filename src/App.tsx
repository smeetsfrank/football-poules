import React from 'react';
import classes from './App.module.scss';

import Standings from './components/Standings/Standings';

const App: React.FC = () => (
  <div className={classes.wrapper}>
    <Standings />
  </div>
);

export default App;
