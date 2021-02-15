// implements geist-ui theme and our css vars
// read more here: https://react.geist-ui.dev/en-us/guide/themes

import React, { ReactNode, ReactElement } from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

type Theme = {
  children: ReactNode;
};

const Theme = ({ children }: Theme): ReactElement => {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
      <style jsx global>{`
        :root {
          --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

          /* Colors */
          --base: #000;
          --base-inverse: #fff;
          --foreground: #000;
          --background: #fff;
          --background-light: var(--accents-1);
          --primary: #ff1a1a;
          --selection: var(--cyan);
          --accents-1: #fafafa;
          --accents-2: #eaeaea;
          --accents-3: #999;
          --accents-4: #888;
          --accents-5: #666;
          --accents-6: #444;
          --accents-7: #333;
          --accents-8: #111;

          --link-color: var(--success);
          --code: var(--purple);
          --border: var(--accents-2);

          --success-light: #3291ff;
          --success: #0070f3;
          --success-dark: #0366d6;
          --error-light: #ff1a1a;
          --error: #e00;
          --error-dark: #c00;
          --warning-light: #f7b955;
          --warning: #f5a623;
          --warning-dark: #f49b0b;

          --secondary-light: var(--accents-3);
          --secondary: var(--accents-5);
          --secondary-dark: var(--accents-7);

          /* Other colors */
          --cyan: #79ffe1;
          --cyan-dark: #50e3c2;
          --cyan-darker: #29bc9b;
          --purple: #f81ce5;
          --violet: #7928ca;
          --alert: #ff0080;

          /* Shadows and opacity  */
          --dropdown-box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.02);
          --dropdown-triangle-stroke: #fff;
          --shadow-smallest: 0px 4px 8px rgba(0, 0, 0, 0.12);
          --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
          --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
          --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);
          --shadow-large-light: 0 30px 60px rgba(0, 0, 0, 0.06);
          --shadow-hover: 0 30px 60px rgba(0, 0, 0, 0.12);
          --shadow-sticky: 0 12px 10px -10px rgba(0, 0, 0, 0.12);

          /* Spacing */
          --space: 4px;
          --space-1x: 5px;
          --space-2x: 8px;
          --space-3x: 10px;
          --space-4x: 14px;
          --space-5x: 16px;
          --space-6x: 25px;
          --space-8x: 32px;
          --space-16x: 64px;
          --space-32x: 128px;
          --space-small: 32px;
          --space-medium: 40px;
          --space-large: 48px;
          --space-gap: 24px;
          --space-gap-half: 12px;
          --space-gap-quarter: var(--space-2x);

          /* font-size */
          --size-base: 1rem; // 16px
          --size-xs3: 0.5rem; // 8px
          --size-xs2: 0.75rem; // 12px
          --size-xs: 0.875rem; // 14px
          --size-s: 0.9375rem; // 15px
          --size-m: var(--size-base); // 16px
          --size-xl: 1.125rem; // 18px
          --size-xl2: 1.25rem; // 20px
          --size-xl3: 1.375rem; // 22px
          --size-xl4: 1.5rem; // 24px
          --size-xl5: 1.875rem; // 30px
          --size-xl6: 2.5rem; // 40px
          --size-xl7: 3rem; // 48px
          --size-xl8: 3.5rem; // 56px
          --size-xl9: 4rem; // 64px
          --size-xl10: 8rem; // 128px

          /* Gaps between components */
          --gap: var(--space-gap);
          --gap-half: var(--space-gap-half);
          --gap-quarter: var(--space-gap-quarter);
          --gap-double: var(--space-large);

          /* Values */
          --weight-normal: 400;
          --weight-semibold: 500;
          --weight-bold: 600;
          --radius: 5px;
          --radius-half: 2.5px;
          --z-index-s: 10;
          --z-index-m: 50;
          --z-index-l: 100;
          --z-index-xl: 200;
          --z-index-xl2: 400;
          --z-index-xl3: 600;
          --z-index-xl4: 800;
          --z-index-super: 9999;

          /* Semantic */
          --scroller-start: #fff;
          --scroller-end: hsla(0, 0%, 100%, 0);
          --portal-opacity: 0.25;

          --page-margin: var(--space-gap);
          --page-width: 1000px;
          --page-width-shrink-with-margin: 780px;
          --page-width-with-margin: 1048px;

          --header-height: 64px;
          --header-border-bottom: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);

          --form-width: 300px;
        }
        .light {
          color: var(--accents-4);
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </GeistProvider>
  );
};

export default Theme;
