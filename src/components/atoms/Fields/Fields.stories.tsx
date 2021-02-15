import React, { ReactElement } from 'react';
import { Form, FieldText, FieldKeywords, FieldCountry } from '../';
import { SelectOption } from '../Fields/types';
import { Formik } from 'formik';
import { Button, Card } from '@geist-ui/react';
import * as Yup from 'yup';

export default {
  title: 'atoms/Fields',
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name is too short - should be 1 characters minimum.')
    .max(32, 'Name is too long - should be 32 characters at maximum.')
    .required(),
  email: Yup.string().email('Insert a valid email').required(),
  keywords: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
        __isNew__: Yup.string(),
      })
    )
    .min(1, 'Minimum of 1 keyword')
    .max(5, 'Maximum of 5 keywords')
    .required('Required')
    .nullable(),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  country: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .required()
    .nullable(),
});

const initialValues = {
  email: '',
  name: '',
  keywords: [{ value: 'test', label: 'test' }],
  password: '',
  country: { value: 'PT' },
};

type Values = {
  email: string;
  name: string;
  password: string;
  keywords: SelectOption[] | null;
  country: SelectOption | null;
};

export const withFormik = (): ReactElement => {
  return (
    <Card>
      <Formik<Values>
        validationSchema={FormSchema}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }): void => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
        validateOnMount
      >
        <Form>
          <FieldText name="name" type="text" title="Name" placeholder="First and last name" />
          <FieldText name="email" type="email" title="E-mail" />
          <FieldText name="password" title="Password" isPassword />
          <FieldKeywords name="keywords" title="Keywords" />
          <FieldCountry name="country" title="Country" />
          <Button htmlType="submit" type="secondary">
            Submit
          </Button>
        </Form>
      </Formik>
    </Card>
  );
};
