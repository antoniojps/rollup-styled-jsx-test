import React, { ReactElement } from 'react';
import Placeholder from './Placeholder';
import Breather from './../Breather/Breather';
import { Spacer } from '@geist-ui/react';

export default {
  title: 'atoms/Placeholder',
};

export const Basic = (): ReactElement => <Placeholder />;

export const LoadingExample = (): ReactElement => (
  <Breather>
    <Placeholder x={0.5} />
    <Spacer y={0.5} />
    <Placeholder x={1} y={0.75} />
    <Spacer y={0.3} />
    <Placeholder x={0.75} y={0.5} />
  </Breather>
);
