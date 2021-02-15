import React, { ReactElement } from 'react';
import PickerDropdownButton from './PickerDropdownButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/PickerDropdownButton',
};

export const Basic = (): ReactElement => <PickerDropdownButton onClick={action('onClick')} />;
