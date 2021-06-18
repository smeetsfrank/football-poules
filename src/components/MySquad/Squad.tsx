/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import classes from './Squad.module.scss';

import exampleTeam from '../../api/football-data/example-team';

import Player from './Player';

type Props = {
  formation: string;
};

const filterPosition = (squad: any, position?: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  squad.filter((player: any) => player.position === position);

const Squad: React.FC<any> = ({ formation }) => {
  // const [playerList, setPlayerList] = useState<any>();
  const [keepersList, setKeepersList] = useState<any>();
  const [defendersList, setDefendersList] = useState<any>();
  const [midfieldersList, setMidfieldersList] = useState<any>();
  const [attackersList, setAttackersList] = useState<any>();

  const { id: formationId, defenders, midfielders, attackers } = formation;

  const fetchTeam = async () => {
    const { squad } = await exampleTeam();
    setAttackersList(filterPosition(squad, 'Attacker'));
    setMidfieldersList(filterPosition(squad, 'Midfielder'));
    setDefendersList(filterPosition(squad, 'Defender'));
    setKeepersList(filterPosition(squad, 'Goalkeeper'));
  };

  const selectedPlayerHandler = (id: any) => {
    console.log(id);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className={`${classes.layout} ${classes[`${formationId}`]}`}>
      <div className={classes.attack}>
        {attackers.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <Player
              availablePlayers={attackersList}
              onSelectPlayer={selectedPlayerHandler}
            />
          </div>
        ))}
      </div>
      <div className={classes.midfield}>
        {midfielders.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <Player
              availablePlayers={midfieldersList}
              onSelectPlayer={selectedPlayerHandler}
            />
          </div>
        ))}
      </div>
      <div className={classes.defense}>
        {defenders.map((position: string) => (
          <div style={{ gridArea: position }} key={uuid()}>
            <Player
              availablePlayers={defendersList}
              onSelectPlayer={selectedPlayerHandler}
            />
          </div>
        ))}
      </div>
      <div className={classes.goalkeeper}>
        <div className={classes['player-1}']} key="goalkeeper">
          <Player
            availablePlayers={keepersList}
            onSelectPlayer={selectedPlayerHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Squad;
