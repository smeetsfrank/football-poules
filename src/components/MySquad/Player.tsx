import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Select from 'react-select';

import classes from './Player.module.scss';

type Props = {
  availablePlayers: any;
  onSelectPlayer: (id: any) => void;
};

const Player: React.FC<Props> = ({ availablePlayers, onSelectPlayer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectedPlayerHandler = (player: any) => {
    setSelectedOption(player);
    onSelectPlayer(player.value);
  };

  const options = availablePlayers?.map(({ id, name }: any) => ({
    value: id,
    label: name,
  }));

  return (
    <div className={classes.player}>
      <Select
        defaultValue={selectedOption}
        onChange={selectedPlayerHandler}
        options={options}
      />
    </div>
  );
};

export default Player;
