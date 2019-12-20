export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5dfc30c75695331873c83e95',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ojenzmam',
                  apiId: '3c44a31d-2f47-4847-848e-353dceb026f6'
                },
                {
                  buildHookId: '5dfc30c7ac0a3c55b165cc75',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bzqnarx9',
                  apiId: '08bed7d2-c98b-4786-aee4-960483948b62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edersign/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bzqnarx9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
