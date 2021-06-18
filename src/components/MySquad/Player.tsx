import React from 'react';
import { v4 as uuid } from 'uuid';

import classes from './Player.module.scss';

type Props = {
  availablePlayers: any;
  onSelectPlayer: (id: any) => void;
};

const Player: React.FC<Props> = ({ availablePlayers, onSelectPlayer }) => {
  const selectedPlayerHandler = (e: any) => {
    onSelectPlayer(e.target.value);
  };
  return (
    <div className={classes.player}>
      <select onChange={selectedPlayerHandler}>
        {availablePlayers?.map(({ id, name }: any) => (
          <option key={uuid()} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Player;
