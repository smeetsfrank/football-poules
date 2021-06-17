import React from 'react';

import classes from './Pitch.module.scss';

const Pitch: React.FC = () => (
  <div className={classes.pitch}>
    <div className={`${classes['penalty-area']} ${classes.away}`} />
    <div className={classes.center} />
    <div className={`${classes['penalty-area']}`} />
  </div>
);

export default Pitch;
