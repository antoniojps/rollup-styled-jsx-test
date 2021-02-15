import React, { ReactElement } from 'react';
import Logo from './Logo';

export default {
  title: 'atoms/Logo',
};

export const Basic = (): ReactElement => <Logo />;
export const RemoveText = (): ReactElement => <Logo removeText />;
