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
  const [defense, setDefense] = useState<any>();
  const [defendersList, setDefendersList] = useState<any>();
  const [midfield, setMidfield] = useState<any>();
  const [midfieldersList, setMidfieldersList] = useState<any>();
  const [attack, setAttack] = useState<any>();
  const [attackersList, setAttackersList] = useState<any>();

  const { id: formationId, defenders, midfielders, attackers } = formation;

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

  const fetchTeam = async () => {
    const { squad } = await exampleTeam();
    // setPlayerList(squad);
    setDefendersList(filterPosition(squad, 'Defender'));
    setKeepersList(filterPosition(squad, 'Goalkeeper'));
    setMidfieldersList(filterPosition(squad, 'Midfielder'));
    setAttackersList(filterPosition(squad, 'Attacker'));
  };

  const selectedPlayerHandler = (id: any) => {
    console.log(id);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  useEffect(() => {
    setDefense(createPlayers(defenders, 'defender'));
    setMidfield(createPlayers(midfielders, 'midfielder'));
    setAttack(createPlayers(attackers, 'attacker'));
  }, [formationId]);

  return (
    <div className={`${classes.layout} ${classes[`${formationId}`]}`}>
      <div className={classes.attack}>
        {attack?.map(({ id }: any) => (
          <div className={classes[`player-${id}`]} key={uuid()}>
            <Player
              availablePlayers={attackersList}
              onSelectPlayer={selectedPlayerHandler}
            />
          </div>
        ))}
      </div>
      <div className={classes.midfield}>
        {midfield?.map(({ id }: any) => (
          <div className={classes[`player-${id}`]} key={id}>
            <Player
              availablePlayers={midfieldersList}
              onSelectPlayer={selectedPlayerHandler}
            />
          </div>
        ))}
      </div>
      <div className={classes.defense}>
        {defense?.map(({ id }: any) => (
          <div className={classes[`player-${id}`]} key={id}>
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
