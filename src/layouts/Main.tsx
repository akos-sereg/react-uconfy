import React, { FC } from 'react';

import './Main.css';
import AppHeader from '../components/AppHeader';
import Navigation from '../components/Navigation';

type Props = {
  renderActionsMenu?: () => JSX.Element;
};

const Main: FC<Props> = ({ children, renderActionsMenu }) => (
  <div className="App">
    <AppHeader />
    <Navigation path={[ { name: 'Devices' } ]} />
    <main className="App-main">{children}</main>
  </div>
);

export default Main;
