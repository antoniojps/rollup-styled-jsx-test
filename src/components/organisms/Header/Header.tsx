import React, { ReactElement } from 'react';
import { Container } from '../../atoms';
import { Text } from '@geist-ui/react';
import FormRankChecker from '../../../containers/Forms/FormRankChecker';

const Header = (): ReactElement => {
  return (
    <header className="header">
      <Container center shrink>
        <Text h1>Youtube Rank Checker</Text>
        <h5 className="subtitle">
          A simple web-based youtube rank checker tool that you can use to find the ranking of any
          youtube video.
        </h5>
        <div className="checker-form">
          <FormRankChecker />
        </div>
      </Container>
      <style jsx>{`
        .header {
          padding: calc(1.5 * var(--space-16x)) 0;
          width: 100%;
          background: var(--background-light);
          box-shadow: var(--header-border-bottom);
        }
        .subtitle {
          font-size: var(--size-xl4);
          color: var(--accents-5);
          text-align: center;
          font-weight: 400;
        }
        .checker-form {
          margin: 0 auto;
          max-width: 520px;
          margin-top: var(--space-medium);
        }
      `}</style>
    </header>
  );
};

export default Header;
