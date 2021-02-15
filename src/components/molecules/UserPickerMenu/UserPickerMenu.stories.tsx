import React from 'react';
import UserPickerMenu from './UserPickerMenu';
import { menuMock } from '../PickerMenu/PickerMenu.stories';

export default {
  title: 'molecules/UserPickerMenu',
};

export const Basic = () => <UserPickerMenu project={{ name: 'Project' }} menu={menuMock} />;
