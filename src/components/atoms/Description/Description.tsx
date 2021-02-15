import React, { ReactElement, ReactNode } from 'react';

type DescriptionProps = {
  children: ReactNode;
};

const Description = ({ children }: DescriptionProps): ReactElement => {
  return (
    <span className="description">
      {children}
      <style jsx>{`
        .description {
          font-weight: var(--weight-semibold);
          font-size: var(--size-xs2);
          text-transform: uppercase;
          margin-top: 0px;
          margin-bottom: var(--space-gap-half);
          color: var(--accents-6);
        }
      `}</style>
    </span>
  );
};

export default Description;
