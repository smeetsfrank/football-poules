import React from 'react';

import Formations from './Formations';

const MySquad: React.FC = () => {
  console.log('my squad');
  return (
    <div>
      Build your squad!
      <Formations />
    </div>
  );
};

export default MySquad;
