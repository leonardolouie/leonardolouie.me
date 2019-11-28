import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'

const ProjectPage = ({ data }) => {
  const { projects } = data
  return (
    <>
      <Layout>
        <Section title="Project Page" subtitle="Some of the projects made by me">
          Site on Development
        </Section>
      </Layout>
    </>
  )
}

export default ProjectPage
export const query = graphql`
  query PageProjectQuery {
    projects: allSanityProject {
      edges {
        node {
          title
          description
          url
          image {
            caption
            asset {
              fluid {
                src
              }
            }
          }
          description
          techUsed {
            site
            name
            image {
              caption
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
