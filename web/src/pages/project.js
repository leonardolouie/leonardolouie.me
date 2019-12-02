import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Hero from '../components/hero'

const ProjectPage = ({ data }) => {
  const { projects } = data
  return (
    <>
      <Layout>
        <Section title="Project Page">
          <Hero title="Currently this page is on development" />
        </Section>
      </Layout>
    </>
  )
}

export default ProjectPage
export const query = graphql`
  query PageProjectQuery {
    projects: allSanityProject(filter: {show: {eq: true}}) {
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
