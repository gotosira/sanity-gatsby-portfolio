export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6045a5f96b86edf3500bce82',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g5xgdcyx',
                  apiId: 'bdf1f502-20c0-431e-99f3-2c8c2fce03ec'
                },
                {
                  buildHookId: '6045a5f9ad3d942b870fc2af',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wqdw6gh1',
                  apiId: 'ee3a91f0-d199-4986-82af-97d35dd52792'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gotosira/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wqdw6gh1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
