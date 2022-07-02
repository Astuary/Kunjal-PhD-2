module.exports = {
  Site: 'https://github.com/Astuary',
  SiteTitle: 'Kunjal Panchal',
  Sitelogo: '#',
  SiteLogoText: 'Kunjal',
  SiteAuthor: 'Kunjal Panchal',
  SiteDescription: 'Kunjal Panchal - PhD Student',
  defaultDescription: 'Kunjal Panchal - Portfolio', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 40,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/astuary',
    linkedin: 'https://www.linkedin.com/in/kunjal-panchal/',
  },
  SiteAddress: {
    city: 'Casablanca',
    region: 'CurvaSud',
    country: 'Morocco',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'kunjalspanchal@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2022',
};
