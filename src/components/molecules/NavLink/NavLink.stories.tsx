import React, { ReactElement } from 'react';
import NavLink from './NavLink';

export default {
  title: 'molecules/NavLink',
};

const popover = {
  label: 'Tools',
  popover: [
    {
      label: 'Youtube rank checker',
      to: '/',
    },
    {
      label: 'Youtube rank tracker',
      to: '/tracker',
    },
  ],
};

export const Basic = (): ReactElement => <NavLink label="Label goes here" to="/" />;
export const Popover = (): ReactElement => <NavLink {...popover} />;
