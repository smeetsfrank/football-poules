import React, { useRef } from 'react';

import FORMATIONS from '../../constants';

type Props = {
  onFormationChange: (formation: string) => void;
};

const Formations: React.FC<Props> = ({ onFormationChange }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const options = FORMATIONS.map(({ name }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={index}>{name}</option>
  ));

  return (
    <div>
      <select
        onChange={() => onFormationChange(selectRef.current!.value)}
        ref={selectRef}
      >
        {options}
      </select>
    </div>
  );
};

export default Formations;
