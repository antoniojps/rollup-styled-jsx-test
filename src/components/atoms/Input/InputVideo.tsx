import React, { ReactElement } from 'react';
import { ApolloError } from '@apollo/client';
import { Input, Spacer, Text } from '@geist-ui/react';
import Placeholder from '../Placeholder/Placeholder';
import Breather from '../Breather/Breather';
import CloseButton from '../CloseButton/CloseButton';
import Emoji from '../Emoji/Emoji';
import { noop } from 'lodash';
import { AlertCircle } from '@geist-ui/react-icons';

type InputType = {
  title?: string | null;
  error?: string | null;
  errorQuery?: ApolloError | undefined | null;
  isLoading?: boolean;
  thumbnail?: string | null;
  onRemove?: () => void;
};

export type InputVideoProps = InputType & React.ComponentProps<typeof Input>;

const InputCustom = ({
  error,
  errorQuery,
  status = 'default',
  isLoading = false,
  thumbnail,
  title,
  value,
  width = '100%',
  onRemove = noop,
  ...inputProps
}: InputVideoProps): ReactElement => {
  const hasError = Boolean(error);

  if (typeof value === 'string' && typeof thumbnail === 'string' && typeof title === 'string') {
    return (
      <div className="input-video">
        <div className="input-video__close">
          <CloseButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              e.stopPropagation();
              onRemove();
            }}
          />
        </div>
        <div className="input-video__thumbnail" />
        <Spacer x={0.5} />
        <h3 className="input-video__title">{title}</h3>
        <style jsx>{`
          .input-video {
            position: relative;
            display: flex;
            padding: var(--space-2x) var(--space-3x);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            &__thumbnail {
              width: 100px;
              flex: none;
              height: 56px;
              background-color: var(--accents-2);
              border-radius: var(--radius-half);
              background-image: url(${thumbnail});
              background-size: cover;
              background-position: center;
            }
            &__title {
              width: calc(100%-100px);
              flex: auto;
              color: var(--base);
              font-size: var(--size-xs);
              font-weight: var(--weight-semibold);
              padding-right: var(--space-small);
            }
            &__close {
              position: absolute;
              left: 100%;
              top: 0%;
              transform: translate(-100%, 0%);
              padding: var(--space-2x) var(--space-3x);
            }
          }
        `}</style>
      </div>
    );
  }

  if (isLoading)
    return (
      <Breather>
        <div className="input-loading">
          <div className="input-loading__close">
            <CloseButton onClick={onRemove} />
          </div>
          <div className="input-loading__thumbnail" />
          <Spacer x={0.5} />
          <div className="input-loading__title">
            <Placeholder useRadiusHalf y={0.75} x={'100%'} />
            <Spacer y={0.25} />
            <Placeholder useRadiusHalf y={0.75} x={'45%'} />
          </div>

          <style jsx>{`
            .input-loading {
              position: relative;
              display: flex;
              padding: var(--space-2x) var(--space-3x);
              border-radius: var(--radius);
              border: 1px solid var(--border);
              &__thumbnail {
                flex: none;
                width: 100px;
                height: 56px;
                background-color: var(--accents-2);
                border-radius: var(--radius-half);
              }
              &__title {
                flex: auto;
                width: calc(100%-100px);
                padding-right: var(--space-small);
              }
              &__close {
                position: absolute;
                left: 100%;
                top: 0%;
                transform: translate(-100%, 0%);
                padding: var(--space-2x) var(--space-3x);
              }
            }
          `}</style>
        </div>
      </Breather>
    );

  if (errorQuery)
    return (
      <div className="input-error">
        <div className="input-error__close">
          <CloseButton onClick={onRemove} />
        </div>
        <div className="input-error__thumbnail">
          <AlertCircle color="var(--base-inverse)" />
        </div>
        <Spacer x={0.5} />
        <div className="input-error__title">
          <Emoji label="sad" emoji="😌" />
          <Spacer x={0.5} />
          Error: {errorQuery.message}
        </div>

        <style jsx>{`
          .input-error {
            position: relative;
            display: flex;
            padding: var(--space-2x) var(--space-3x);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            &__thumbnail {
              flex: none;
              width: 100px;
              height: 56px;
              background-color: var(--foreground);
              border-radius: var(--radius-half);
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--base-inverse);
            }
            &__title {
              display: flex;
              flex: auto;
              width: calc(100%-100px);
              color: var(--base);
              font-size: var(--size-xs);
              font-weight: var(--weight-semibold);
              padding-right: var(--space-small);
            }
            &__close {
              position: absolute;
              left: 100%;
              top: 0%;
              transform: translate(-100%, 0%);
              padding: var(--space-2x) var(--space-3x);
            }
          }
        `}</style>
      </div>
    );

  return (
    <>
      <Input width={width} status={hasError ? 'error' : status} {...inputProps} />
      {hasError && (
        <>
          <Spacer y={0.4} />
          <Text small type="error" size="var(--size-xs2)">
            {error}
          </Text>
        </>
      )}
    </>
  );
};
export default InputCustom;
