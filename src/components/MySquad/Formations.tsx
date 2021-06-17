import React from 'react';

import FORMATIONS from '../../constants';

type Props = {
  onFormationChange: (formation: any) => void;
};

const Formations: React.FC<Props> = ({ onFormationChange }) => {
  const formationChangeHandler = (e: any) => {
    const selectedFormation = FORMATIONS.find(
      ({ id }) => id === e.target.value,
    );
    onFormationChange(selectedFormation);
  };

  const options = FORMATIONS.map(({ name, id }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  return (
    <div>
      <select onChange={formationChangeHandler}>{options}</select>
    </div>
  );
};

export default Formations;
