interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '马老大的运动记录',
  siteUrl: 'https://www.strava.com/athletes/bossma',
  logo: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/136766871/31118839/1/large.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'MikeMa',
      url: 'https://mikema.vercel.app/',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/bossma',
    },
  ],
};

export default data;
