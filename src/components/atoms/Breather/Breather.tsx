import React, { ReactNode, ReactElement } from 'react';

type BreatherProps = {
  children: ReactNode;
};

const Breather = ({ children }: BreatherProps): ReactElement => {
  return (
    <div className="breather">
      <div className="breather__overlay" />
      <div className="breather__content">{children}</div>
      <style jsx>{`
        @keyframes breath {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }

        .breather {
          position: relative;

          &__overlay {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: var(--z-index-super);
            cursor: wait;
          }
          &__content {
            animation: breath 2s infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Breather;
