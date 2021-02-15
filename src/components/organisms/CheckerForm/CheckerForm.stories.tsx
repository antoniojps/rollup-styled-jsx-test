import React, { ReactElement } from 'react';
import CheckerForm from './CheckerForm';

export default {
  title: 'organisms/CheckerForm',
};

export const Basic = (): ReactElement => (
  <CheckerForm
    onSubmit={(values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  />
);
