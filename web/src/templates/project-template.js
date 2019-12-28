import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Section from 'components/section'
import Post from 'components/post'
import PropTypes from 'prop-types'

const ProjecTemplate = ({ data }) => {
  const { projects } = data

  return (
    <Layout>
      <Section flexType={'col'}>
        <Post {...projects} />
      </Section>
    </Layout>
  )
}

export default ProjecTemplate

ProjecTemplate.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query ProjectPageBySlugQuery($slug: String!) {
    projects: sanityProject(show: { eq: true }, slug: { current: { eq: $slug } }) {
      title
      description
      url
      _rawBody
      publishedAt(fromNow: true)
      image {
        caption
        asset {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
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
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`
