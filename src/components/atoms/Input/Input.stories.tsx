import React, { ReactElement } from 'react';
import Input from './Input';

export default {
  title: 'atoms/Input',
};

export const Basic = (): ReactElement => (
  <Input placeholder="Insert youtube video url" width="100%" />
);

export const Error = (): ReactElement => (
  <Input
    placeholder="Insert youtube video url"
    width="100%"
    error="Invalid youtube url"
    value="Hello world"
  />
);
