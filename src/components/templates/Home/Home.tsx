import React, { ReactElement } from 'react';
import { Header } from '../../organisms';
import LayoutPublic from '../LayoutPublic/LayoutPublic';

const Home = (): ReactElement => {
  return (
    <LayoutPublic>
      <Header />
    </LayoutPublic>
  );
};

export default Home;
