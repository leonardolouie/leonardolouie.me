const { isFuture } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.join(__dirname, 'src', 'components'), 'node_modules']
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query PageQuery {
        allSanityProject(filter: { show: { eq: true } }) {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const projectTemplate = path.resolve('src/templates/project-template.js')

  result.data.allSanityProject.edges.map(value => {
    const {
      node: {
        slug: { current }
      }
    } = value
    const path = `projects/${current}`
    createPage({
      path,
      component: projectTemplate,
      context: {
        slug: current
      }
    })
  })
}
