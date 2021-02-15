import React from 'react';
import CloseButton from './CloseButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/CloseButton',
};
export const Basic = () => <CloseButton onClick={action('onClick')} />;
