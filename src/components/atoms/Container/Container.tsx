import React, { ReactElement, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  center?: boolean;
  shrink?: boolean;
};

const Container = ({ children, center, shrink }: ContainerProps): ReactElement => {
  return (
    <div className="page-wrapper">
      {children}
      <style jsx>{`
        .page-wrapper {
          margin-left: auto;
          margin-right: auto;
          max-width: ${shrink
            ? 'var(--page-width-shrink-with-margin)'
            : 'var(--page-width-with-margin)'};
          padding-left: var(--page-margin);
          padding-right: var(--page-margin);
          text-align: ${center ? 'center' : 'initial'};
        }
      `}</style>
    </div>
  );
};

export default Container;
