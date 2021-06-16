import React from 'react';
import classes from './Player.module.scss';

type Props = {
  id: number;
};

const Player: React.FC<Props> = ({ id }) => {
  console.log('player');
  return <div className={classes.player}>{id}</div>;
};

export default Player;
