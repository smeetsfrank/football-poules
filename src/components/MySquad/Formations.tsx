import React from 'react';

import FORMATIONS from '../../constants';

const Formations: React.FC = () => {
  console.log('formations');
  return (
    <select>{FORMATIONS.map((formation) => console.log(formation))}</select>
  );
};

export default Formations;
