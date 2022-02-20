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
                  buildHookId: '6211b0dc85be32e7bc0b5ec8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g7oxewv8',
                  apiId: '508e9d0f-2019-4c3f-8a77-82d93198a22e'
                },
                {
                  buildHookId: '6211b0dc335c6a3c51518e88',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nx7kp8zd',
                  apiId: 'f67e2d25-dfe4-4b00-92f3-ba72d1c4754f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JulesFlo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nx7kp8zd.netlify.app',
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
