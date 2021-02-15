import React, { ReactElement } from 'react';
import Placeholder from './../Placeholder/Placeholder';
import Container from './../Container/Container';
import Breather from './Breather';
import { Spacer, Text } from '@geist-ui/react';

export default {
  title: 'atoms/Breather',
};

export const Basic = (): ReactElement => (
  <Breather>
    <Container>
      <Text>This text should be breathing</Text>
    </Container>
  </Breather>
);

export const LoadingExample = (): ReactElement => (
  <Breather>
    <Placeholder x={0.5} />
    <Spacer y={0.5} />
    <Placeholder x={1} y={0.75} />
    <Spacer y={0.3} />
    <Placeholder x={0.75} y={0.5} />
  </Breather>
);
