import React, { useState, useEffect } from 'react';
import exampleTeam from '../../api/football-data/example-team';

import classes from './MySquad.module.scss';

import Pitch from './Pitch/Pitch';
import Formations from './Formations';
import Squad from './Squad';
import PlayerSelection from './PlayerSelection';

const MySquad: React.FC = () => {
  const [formation, setFormation] = useState<any>({
    id: 'form4-4-2',
    name: '4-4-2',
    goalkeeper: ['gk'],
    defenders: ['f-lwb', 'lb', 'rb', 'f-rwb'],
    midfielders: ['lw', 'rcm', 'lcm', 'rw'],
    attackers: ['lcf', 'rcf'],
  });
  const [mySquad, setMySquad] = useState<any>([]);
  const [players, setPlayers] = useState<any>(null);

  const fetchTeam = async () => {
    const { squad } = await exampleTeam();
    setPlayers(squad);
  };

  const formationHandler = (selectedFormation: any) => {
    setFormation(selectedFormation);
  };

  const selectedPlayerHandler = (selectedPlayer: any) => {
    if (selectedPlayer.action === 'clear') {
      const updatedPlayerList = players.map((player: any) => {
        if (player.id === selectedPlayer.value) {
          return { ...player, selected: false };
        }
        return player;
      });
      setMySquad(
        mySquad.filter((player: any) => player?.value !== selectedPlayer.value),
      );
      setPlayers(updatedPlayerList);
    }

    if (selectedPlayer.action === 'select-option') {
      const updatedPlayerList = players.map((player: any) => {
        if (player.id === selectedPlayer.value) {
          return { ...player, selected: true };
        }
        return player;
      });
      setMySquad((prevState: any) => [...prevState, selectedPlayer]);
      setPlayers(updatedPlayerList);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes['left-panel']}>
        <Formations onFormationChange={formationHandler} />
        <div className={classes['pitch-wrapper']}>
          <Pitch />
          <Squad formation={formation} players={mySquad} />
        </div>
      </div>
      <div className={classes['right-panel']}>
        <div className={classes.players}>
          {players && (
            <PlayerSelection
              formation={formation}
              players={players}
              selectedPlayer={selectedPlayerHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MySquad;
