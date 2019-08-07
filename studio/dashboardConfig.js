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
                  buildHookId: '5d4aac6d53bb233ce3eb6cca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n3opzjyb',
                  apiId: '1ce22cdd-7077-4f4c-91d6-dc2d4b4fc2c4'
                },
                {
                  buildHookId: '5d4aac6d84c04ca2e526faeb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5vx3vxvi',
                  apiId: '2282ccda-ed93-42aa-aba8-74fec8fd9fb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leonardolouie/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5vx3vxvi.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
