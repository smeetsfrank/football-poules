import React from 'react';
import { ITeam } from '../../types/types';

import Team from './Team';
import classes from './Group.module.scss';

type Props = {
  teams: ITeam[];
};

const Group: React.FC<Props> = ({ teams }) => (
  <ul className={classes.group}>
    {teams.map(({ id, name, crestUrl, stats }) => (
      <li key={id}>
        <Team id={id} name={name} crestUrl={crestUrl} stats={stats} />
      </li>
    ))}
  </ul>
);
export default Group;
