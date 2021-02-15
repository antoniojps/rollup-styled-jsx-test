import React, { ReactElement } from 'react';
import InputVideo from './InputVideo';
import { action } from '@storybook/addon-actions';
import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';

export default {
  title: 'atoms/InputVideo',
};

export const Default = (): ReactElement => (
  <InputVideo placeholder="Insert youtube video url" width="100%" />
);

export const Basic = (): ReactElement => (
  <InputVideo
    onRemove={action('onRemove')}
    value="https://www.youtube.com/watch?v=sLpU2KV69gM"
    width="100%"
    thumbnail="https://i.ytimg.com/vi/sLpU2KV69gM/hqdefault.jpg"
    title="Sou Menino para Ir 3 com Salvador Martinha | Montar uma exposição em 9 horas"
  />
);

export const Loading = (): ReactElement => (
  <InputVideo
    onRemove={action('onRemove')}
    placeholder="Insert youtube video url"
    width="100%"
    error="Invalid youtube url"
    value="Hello world"
    isLoading
  />
);

export const Error = (): ReactElement => (
  <InputVideo
    placeholder="Insert youtube video url"
    width="100%"
    error="Invalid youtube url"
    value="Hello world"
  />
);

const MockApolloError = new ApolloError({
  graphQLErrors: [new GraphQLError('Video not found')],
});

export const ErrorQuery = (): ReactElement => (
  <InputVideo placeholder="Insert youtube video url" width="100%" errorQuery={MockApolloError} />
);
