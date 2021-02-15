import React, { ReactElement } from 'react';
import { Form, FieldKeywords, FieldCountry } from '../../atoms';
import { FieldVideo } from '../../../containers';
import { SelectOption } from '../../atoms/Fields/types';
import { Formik, FormikHelpers } from 'formik';
import { Button } from '@geist-ui/react';
import { YOUTUBE_VIDEO_URL } from '@ytrank/utils';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  video: Yup.string()
    .matches(YOUTUBE_VIDEO_URL, { message: 'Please insert a valid youtube video url' })
    .required('Please insert a youtube video url'),
  keywords: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
        __isNew__: Yup.string().notRequired().nullable(),
      })
    )
    .min(1, 'Minimum of 1 keyword')
    .max(5, 'Maximum of 5 keywords')
    .required('Insert at least one keyword')
    .nullable(),
  country: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .required('Please insert a country')
    .nullable(),
});

const initialValues = {
  video: '',
  keywords: null,
  country: { value: 'US' },
};

type Values = {
  video: string;
  keywords: SelectOption[] | null;
  country: SelectOption | null;
};

type CheckerFormProps = {
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
};

const CheckerForm = ({ onSubmit }: CheckerFormProps): ReactElement => {
  return (
    <div className="checker-form">
      <Formik<Values>
        validationSchema={FormSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnMount
      >
        <Form>
          <FieldVideo
            name="video"
            title="Youtube video url"
            placeholder="Insert youtube video url"
          />
          <FieldKeywords name="keywords" title="Keywords" />
          <FieldCountry name="country" title="Country" />
          <Button htmlType="submit" type="secondary">
            Submit
          </Button>
        </Form>
      </Formik>

      <style jsx>{`
        .checker-form {
          text-align: left;
          background: var(--background);
          box-shadow: var(--shadow-large-light);
          border-radius: var(--radius);
          padding: var(--space-gap);
        }
      `}</style>
    </div>
  );
};

export default CheckerForm;
