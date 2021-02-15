import React, { ReactElement } from 'react';
import { Form as FormFormik, FormikFormProps } from 'formik';

const Form = (props: FormikFormProps): ReactElement => {
  return (
    <div className="form">
      <FormFormik {...props} />
      <style jsx>{`
        .form {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Form;
