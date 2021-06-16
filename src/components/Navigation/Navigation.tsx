import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/matches">All matches</Link>
      </li>
      <li>
        <Link to="/standings">Standings</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
