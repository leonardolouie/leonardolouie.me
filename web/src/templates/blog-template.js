import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Section from 'components/section'
import Post from 'components/post'
import PropTypes from 'prop-types'

const BlogTemplate = ({ data }) => {
  const { projects, siteSettings } = data
  const { icon, author } = siteSettings

  const { title, description, keywords, image } = projects

  return (
    <Layout icon={icon} image={image} author={author} title={title} description={description} keywords={keywords}>
      <Section flexType={'col'}>
        <Post {...projects} />
      </Section>
    </Layout>
  )
}

export default BlogTemplate

BlogTemplate.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query BlogPageBySlugQuery($slug: String!) {
    projects: sanityBlog(show: { eq: true }, slug: { current: { eq: $slug } }) {
      title
      description
      keywords
      _rawBody
      publishedAt(fromNow: true)
      image {
        caption
        alt
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
    }
  }
`
