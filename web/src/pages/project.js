import React from 'react'
import Layout from 'components/layout'
import Section from 'components/section'
import { graphql } from 'gatsby'
import Cards from 'components/cards'
import PropTypes from 'prop-types'

const ProjectPage = ({ data }) => {
  const {
    siteSettings,
    projects: { edges }
  } = data

  const { keywords, description, icon, image, author } = siteSettings

  return (
    <>
      <Layout
        title={'Leonardo Louie | Projects'}
        description={description}
        image={image}
        keywords={keywords}
        author={author}
        icon={icon}
      >
        <Section title="RECENT PROJECTS AND WORKS">
          {edges &&
            edges.map((value, key) => {
              return (
                <Cards
                  url={value.node.url}
                  title={value.node.title}
                  image={value.node.image.asset.fluid}
                  imageAlt={value.node.image.caption}
                  description={value.node.description}
                  type={'projects'}
                  slug={value.node.slug.current}
                  key={key}
                />
              )
            })}
        </Section>
      </Layout>
    </>
  )
}

export default ProjectPage

ProjectPage.propTypes = {
  data: PropTypes.object
}

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
    siteSettings: sanitySiteSettings {
      description
      keywords
      title
      author
      icon {
        caption
        alt
        asset {
          fluid {
            src
          }
        }
      }
      image {
        caption
        alt
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`
