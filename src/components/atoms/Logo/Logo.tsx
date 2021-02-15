import React, { ReactElement } from 'react';

type LogoProps = {
  removeText?: boolean;
};

const Logo = ({ removeText = false }: LogoProps): ReactElement => {
  return (
    <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30">
        <g fill="none">
          <path
            fill="red"
            d="M20.562 27.736c0 1.25-.823 2.264-1.837 2.264H1.837C.822 30 0 28.986 0 27.736V2.264C0 1.014.822 0 1.837 0h16.888c1.014 0 1.837 1.014 1.837 2.264v25.472z"
          ></path>
          <path fill="#FFF" d="M6.694 8.71l7.651 5.322-7.65 5.323z"></path>
        </g>
      </svg>
      {!removeText && <div className="logo__text">YTRank</div>}
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          &__text {
            font-family: var(--font);
            font-weight: var(--weight-semibold);
            font-size: var(--size-xs);
            color: var(--base);
            padding-left: var(--space-2x);
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
