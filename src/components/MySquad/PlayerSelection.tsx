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

const filterPlayerPosition = (squad: any, position?: string) =>
  squad.filter(
    (player: any) => player.position === position && player.selected !== true,
  );

const playerDetails = (player: any) =>
  player?.map(({ id, name, position, shirtNumber }: any) => ({
    value: id,
    label: name,
    position,
    shirtNumber,
  }));

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
    setAttackersList(filterPlayerPosition(players, 'Attacker'));
    setMidfieldersList(filterPlayerPosition(players, 'Midfielder'));
    setDefendersList(filterPlayerPosition(players, 'Defender'));
    setGoalkeepersList(filterPlayerPosition(players, 'Goalkeeper'));
  };

  const attackSelectOptions = playerDetails(attackersList);
  const midfieldSelectOptions = playerDetails(midfieldersList);
  const defenseSelectOptions = playerDetails(defendersList);
  const goalkeeperSelectOptions = playerDetails(goalkeepersList);

  const selectedPlayerHandler = (player: any, ctx: any) => {
    if (ctx.action === 'clear') {
      if (ctx.removedValues.length > 0) {
        selectedPlayer({
          action: ctx.action,
          value: ctx.removedValues[0].value,
        });
        return;
      }
    }
    const selected = {
      action: ctx.action,
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
          <div key={position}>
            <Select
              isClearable
              name={position}
              onChange={selectedPlayerHandler}
              options={attackSelectOptions}
            />
            <span>{position}</span>
          </div>
        ))}
      </div>
      <div className={classes.midfield}>
        <h2>Midfielders</h2>
        {formation.midfielders?.map((position: string) => (
          <div key={position}>
            <Select
              isClearable
              name={position}
              onChange={selectedPlayerHandler}
              options={midfieldSelectOptions}
            />
            <span>{position}</span>
          </div>
        ))}
      </div>
      <div className={classes.defense}>
        <h2>Defenders</h2>
        {formation.defenders?.map((position: string) => (
          <div key={position}>
            <Select
              isClearable
              name={position}
              onChange={selectedPlayerHandler}
              options={defenseSelectOptions}
            />
            <span>{position}</span>
          </div>
        ))}
      </div>
      <div className={classes.goalkeeper}>
        <h2>Goalkeepers</h2>
        {formation.goalkeeper?.map((position: string) => (
          <div key={position}>
            <Select
              isClearable
              name={position}
              onChange={selectedPlayerHandler}
              options={goalkeeperSelectOptions}
            />
            <span>{position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;
