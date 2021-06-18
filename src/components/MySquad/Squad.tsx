/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React from 'react';
import { v4 as uuid } from 'uuid';

import classes from './Squad.module.scss';

type Props = {
  formation: string;
  mySquad: any;
};

const Squad: React.FC<any> = ({ formation, players }) => {
  // // const [playerList, setPlayerList] = useState<any>();
  const {
    id: formationId,
    attackers,
    midfielders,
    defenders,
    goalkeeper,
  } = formation;

  return (
    <div className={`${classes.layout} ${classes[`${formationId}`]}`}>
      <div className={classes.attack}>
        {attackers.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <div className={classes.position} />
            {players.map(({ label, role }: any) => role === position && label)}
          </div>
        ))}
      </div>
      <div className={classes.midfield}>
        {midfielders.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <div className={classes.position} />
            {players.map(({ label, role }: any) => role === position && label)}
          </div>
        ))}
      </div>
      <div className={classes.defense}>
        {defenders.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <div className={classes.position} />
            {players.map(({ label, role }: any) => role === position && label)}
          </div>
        ))}
      </div>
      <div className={classes.goalkeeper}>
        {goalkeeper.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <div className={classes.position} />
            {players.map(({ label, role }: any) => role === position && label)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squad;
