import React, { ReactElement } from 'react';
import Nav from './Nav';
import { menuMock } from '../../molecules/PickerMenu/PickerMenu.stories';

export default {
  title: 'organisms/Nav',
};

const start = [
  {
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
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
];

const end = [
  {
    label: 'Support',
    to: '/support',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Login',
    to: '/login',
  },
];

const endUser = [
  {
    label: 'Support',
    to: '/support',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
];

const video = [
  {
    label: 'The Coronavirus Explained & What You Should Do',
    to: '/video/BtN-goy9VOY',
  },
];

const user = {
  name: 'Antonio Santos',
  image: 'https://react.geist-ui.dev/images/avatar.png',
};

export const Public = (): ReactElement => <Nav start={start} end={end} />;
export const User = (): ReactElement => (
  <Nav
    picker={{
      project: { name: 'Project' },
      menu: menuMock,
    }}
    start={video}
    user={user}
    end={endUser}
    showContactButton={false}
    showSignupButton={false}
    removeLogoText
  />
);
