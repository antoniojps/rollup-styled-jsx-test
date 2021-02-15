import React from 'react';
import PickerMenu from './PickerMenu';
import { Plus, Settings } from '@geist-ui/react-icons';

export default {
  title: 'molecules/PickerMenu',
  excludeStories: /.*Mock$/,
};

export const menuMock = [
  {
    title: 'Conta',
    links: [
      {
        title: 'Username',
        image: 'https://react.geist-ui.dev/images/avatar.png',
        Icon: Settings,
        href: '#user',
        hrefIcon: '#user-settings',
      },
    ],
  },
  {
    title: 'Projects',
    links: [
      {
        title: 'Project A',
      },
      {
        title: 'Project B',
      },
    ],
  },
  {
    links: [
      {
        title: 'Add project',
        Icon: Plus,
        hrefIcon: '#add',
      },
    ],
  },
];

export const Basic = () => <PickerMenu menu={menuMock} />;
