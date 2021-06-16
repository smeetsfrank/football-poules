import React, { useState } from 'react';

import Formations from './Formations';
import Squad from './Squad';

const MySquad: React.FC = () => {
  const [formation, setFormation] = useState<any>({
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
      <Squad formation={formation} />
    </div>
  );
};

export default MySquad;
