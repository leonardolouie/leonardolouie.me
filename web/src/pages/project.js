import React from 'react'
import Layout from 'components/layout'
import Section from 'components/section'
import SingleColumn from 'components/singleColumn'
import { graphql } from 'gatsby'

const ProjectPage = ({ data }) => {
  const {
    projects: { edges }
  } = data

  console.table(edges)

  return (
    <>
      <Layout>
        <Section title="RECENT PROJECTS AND WORKS" flexType={'col'}>
          {edges.map((value, key) => (
            <SingleColumn
              title={value.node.title}
              slug={value.node.slug}
              description={value.node.description}
              key={key}
            />
          ))}
        </Section>
      </Layout>
    </>
  )
}

export default ProjectPage
export const query = graphql`
  query PageProjectQuery {
    projects: allSanityProject(filter: { show: { eq: true } }) {
      edges {
        node {
          title
          description
          url
          slug {
            current
          }
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
