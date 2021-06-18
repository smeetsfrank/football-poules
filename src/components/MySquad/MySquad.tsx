import React, { useState } from 'react';

import classes from './MySquad.module.scss';
import Pitch from './Pitch/Pitch';
import Formations from './Formations';
import Squad from './Squad';

const MySquad: React.FC = () => {
  const [formation, setFormation] = useState<any>({
    id: 'form4-4-2',
    name: '4-4-2',
    defenders: ['f-lwb', 'lb', 'rb', 'f-rwb'],
    midfielders: ['lw', 'rcm', 'lcm', 'rw'],
    attackers: ['lcf', 'rcf'],
  });

  const formationHandler = (selectedFormation: any) => {
    setFormation(selectedFormation);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes['right-panel']}>
        <Formations onFormationChange={formationHandler} />
        <div className={classes['pitch-wrapper']}>
          <Pitch />
          <Squad formation={formation} />
        </div>
      </div>
      {/* <div className={classes['right-panel']}>
        <div className={classes.players}>
          <Squad formation={formation} />
        </div>
      </div> */}
    </div>
  );
};

export default MySquad;
