/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import classes from './Squad.module.scss';

import Player from './Player';

type Props = {
  formation: string;
};

const Squad: React.FC<any> = ({ formation }) => {
  const [defenders, setDefenders] = useState<any>();
  const [midfielders, setMidfielders] = useState<any>();
  const [attackers, setAttackers] = useState<any>();

  const { defense, midfield, attack } = formation;

  const createPlayers = (num: number, position: string) => {
    const players = [];
    for (let i = 0; i < num; i++) {
      players.push({
        id: i + 1,
        position,
      });
    }
    return players;
  };

  useEffect(() => {
    setDefenders(createPlayers(defense, 'defender'));
    setMidfielders(createPlayers(midfield, 'midfielder'));
    setAttackers(createPlayers(attack, 'attacker'));
  }, []);

  return (
    <div className={classes.pitch}>
      <div className={classes.attack}>
        {attackers?.map(({ id }: any) => (
          <div className={classes[`player-${id}`]} key={id}>
            <Player id={id} />
          </div>
        ))}
      </div>
      <div className={classes.midfield}>
        {midfielders?.map(({ id }: any) => (
          <div className={classes[`player-${id}`]} key={id}>
            <Player id={id} />
          </div>
        ))}
      </div>
      <div className={classes.defense}>
        {defenders?.map(({ id }: any) => (
          <div className={classes[`player-${id}`]} key={id}>
            <Player id={id} />
          </div>
        ))}
      </div>
      <div className={classes.goalkeeper}>
        <div className={classes['player-1}']} key="goalkeeper">
          <Player id={1} />
        </div>
      </div>
    </div>
  );
};

export default Squad;
