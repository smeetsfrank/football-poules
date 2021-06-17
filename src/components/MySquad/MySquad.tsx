import React, { useState } from 'react';

import classes from './MySquad.module.scss';
import Pitch from './Pitch/Pitch';
import Formations from './Formations';
import Squad from './Squad';

const MySquad: React.FC = () => {
  const [formation, setFormation] = useState<any>({
    id: 'form4-4-2',
    name: '4-4-2',
    defense: 4,
    midfield: 4,
    attack: 2,
  });

  const formationHandler = (selectedFormation: any) => {
    setFormation(selectedFormation);
  };

  return (
    <div>
      Build your squad!
      <Formations onFormationChange={formationHandler} />
      <div className={classes.wrapper}>
        <Pitch />
        <Squad formation={formation} />
      </div>
    </div>
  );
};

export default MySquad;
