const seo = {
  url:
    process.env.DEPLOY_ENV === 'production'
      ? 'https://ytrank-production.now.sh'
      : 'https://ytrank-develop.now.sh',
  title: 'Youtube Rank Checker',
  description:
    'Use our costless and online Youtube Rank Checker today to track your Youtube video ranking position for a specific keyword.',
  keywords: [
    'youtube rank checker',
    'youtube rank',
    'youtube video rank checker',
    'free youtube video rank checker',
    'youtube video rank checker online',
    'youtube seo',
  ],
  image: { src: '/share.jpg', width: 1686, height: 882 },
};

const menu = {
  start: [
    {
      label: 'Tools',
      popover: [
        {
          label: 'Youtube rank checker',
          to: '/',
        },
        {
          label: 'Youtube rank tracker',
          to: '/tracker',
        },
      ],
    },
    {
      label: 'Pricing',
      to: '/pricing',
    },
  ],

  end: [
    {
      label: 'Support',
      to: '/support',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
  ],
};

export default {
  ...seo,
  menu,
};
