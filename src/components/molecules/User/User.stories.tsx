import React from 'react';
import User from './User';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'molecules/User',
};
export const Basic = () => (
  <User
    image={text('image (source)', 'https://react.geist-ui.dev/images/avatar.png')}
    name={text('name', 'Joe')}
  />
);

export const WithoutImage = () => <User name="Antonio Santos" />;
