/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import classes from './PlayerSelection.module.scss';

type Props = {
  formation: any;
  players: any;
  selectedPlayer: (player: any) => void;
};

const filterPosition = (squad: any, position?: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  squad.filter((player: any) => player.position === position);

const PlayerSelection: React.FC<Props> = ({
  formation,
  players,
  selectedPlayer,
}) => {
  const [attackersList, setAttackersList] = useState<any>();
  const [midfieldersList, setMidfieldersList] = useState<any>();
  const [defendersList, setDefendersList] = useState<any>();
  const [goalkeepersList, setGoalkeepersList] = useState<any>();

  const filterPlayers = () => {
    setAttackersList(filterPosition(players, 'Attacker'));
    setMidfieldersList(filterPosition(players, 'Midfielder'));
    setDefendersList(filterPosition(players, 'Defender'));
    setGoalkeepersList(filterPosition(players, 'Goalkeeper'));
  };

  const attackOptions = attackersList?.map(
    ({ id, name, position, shirtNumber }: any) => ({
      value: id,
      label: name,
      position,
      shirtNumber,
    }),
  );

  const midfieldOptions = midfieldersList?.map(
    ({ id, name, position, shirtNumber }: any) => ({
      value: id,
      label: name,
      position,
      shirtNumber,
    }),
  );

  const defenseOptions = defendersList?.map(
    ({ id, name, position, shirtNumber }: any) => ({
      value: id,
      label: name,
      position,
      shirtNumber,
    }),
  );

  const goalkeeperOptions = goalkeepersList?.map(
    ({ id, name, position, shirtNumber }: any) => ({
      value: id,
      label: name,
      position,
      shirtNumber,
    }),
  );

  const selectedPlayerHandler = (player: any, ctx: any) => {
    const selected = {
      ...player,
      role: ctx.name,
    };
    selectedPlayer(selected);
  };

  useEffect(() => {
    filterPlayers();
  }, [formation, players]);

  return (
    <div>
      <div className={classes.attack}>
        <h2>Attackers</h2>
        {formation.attackers?.map((position: string) => (
          <Select
            key={position}
            name={position}
            onChange={selectedPlayerHandler}
            options={attackOptions}
          />
        ))}
      </div>
      <div className={classes.midfield}>
        <h2>Midfielders</h2>
        {formation.midfielders?.map((position: string) => (
          <Select
            key={position}
            name={position}
            onChange={selectedPlayerHandler}
            options={midfieldOptions}
          />
        ))}
      </div>
      <div className={classes.defense}>
        <h2>Defenders</h2>
        {formation.defenders?.map((position: string) => (
          <Select
            key={position}
            name={position}
            onChange={selectedPlayerHandler}
            options={defenseOptions}
          />
        ))}
      </div>
      <div className={classes.goalkeeper}>
        <h2>Goalkeepers</h2>
        {formation.goalkeeper?.map((position: string) => (
          <Select
            key={position}
            name={position}
            onChange={selectedPlayerHandler}
            options={goalkeeperOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;
