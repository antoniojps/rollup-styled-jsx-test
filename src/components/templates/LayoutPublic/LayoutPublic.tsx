import React, { ReactElement, ReactNode, useMemo } from 'react';
import { Nav } from '../../organisms';
import SITE_METADATA from '../../../containers/Seo/Seo.data';
import { useSession } from 'next-auth/client';

type LayoutProps = {
  children: ReactNode;
};

const LayoutPublic = ({ children }: LayoutProps): ReactElement => {
  const [session, loading] = useSession();

  const end = useMemo(() => {
    return [
      ...SITE_METADATA.menu.end,
      ...(!session?.user || loading
        ? [
            {
              label: 'Login',
              to: '/login',
            },
          ]
        : []),
    ];
  }, [session, loading]);

  return (
    <div>
      <div className="nav__wrapper">
        <Nav start={SITE_METADATA.menu.start} end={end} />
      </div>
      {children}
      <style jsx>{`
        .nav__wrapper {
          position: sticky;
          top: 0;
          background-color: var(--background);
          z-index: 101;
          min-height: var(--header-height);
          transition: box-shadow 0.1s ease 0s;
          backdrop-filter: saturate(180%) blur(5px);
          box-shadow: var(--header-border-bottom);
        }
      `}</style>
    </div>
  );
};

export default LayoutPublic;
