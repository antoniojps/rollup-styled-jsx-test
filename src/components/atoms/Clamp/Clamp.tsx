import React, { ReactNode } from 'react';

type ClampProps = {
  children: ReactNode;
  lines?: number;
  title?: string;
};

const Clamp = ({ lines = 1, title = '', children }: ClampProps) => {
  return (
    <span {...(title ? { title } : {})}>
      {children}
      <style jsx>{`
        span {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: ${lines};
          -webkit-box-orient: vertical;
          word-break: break-word;
        }
      `}</style>
    </span>
  );
};

export default Clamp;
