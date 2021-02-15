import React, { ReactElement } from 'react';
import CheckerForm from '../../components/organisms/CheckerForm/CheckerForm';

const FormRankChecker = (): ReactElement => {
  return (
    <CheckerForm
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    />
  );
};

export default FormRankChecker;
