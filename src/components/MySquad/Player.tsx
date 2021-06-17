/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';

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
        <>
          <optgroup label="Goalkeepers">
            <option>Select player</option>
            {availablePlayers?.map(
              ({ id, name, position }: any) =>
                position === 'Goalkeeper' && (
                  <>
                    <option key={id} value={id}>
                      {name}
                    </option>
                  </>
                ),
            )}
          </optgroup>
          <optgroup label="Defenders">
            {availablePlayers?.map(
              ({ id, name, position }: any) =>
                position === 'Defender' && (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ),
            )}
          </optgroup>
          <optgroup label="Midfielders">
            {availablePlayers?.map(
              ({ id, name, position }: any) =>
                position === 'Midfielder' && (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ),
            )}
          </optgroup>
          <optgroup label="Attackers">
            {availablePlayers?.map(
              ({ id, name, position }: any) =>
                position === 'Attacker' && (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ),
            )}
          </optgroup>
        </>
      </select>
    </div>
  );
};

export default Player;
