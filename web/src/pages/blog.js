import React from 'react'
import Layout from 'components/layout'
import Section from 'components/section'
import SingleColumn from '../components/singleColumn'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Blog = ({ data }) => {
  const {
    siteSettings,
    blogs: { edges }
  } = data

  const { keywords, description, icon, image, author } = siteSettings

  return (
    <>
      <Layout
        title={'Leonardo Louie | Blogs'}
        description={description}
        image={image}
        keywords={keywords}
        author={author}
        icon={icon}
      >
        <Section title="RECENT BLOGS">
          {edges &&
            edges.map((value, key) => {
              return (
                <SingleColumn
                  title={value.node.title}
                  image={value.node.image.asset.fluid}
                  imageAlt={value.node.image.caption}
                  description={value.node.description}
                  keywords={value.node.keywords}
                  type={'blog'}
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

export default Blog
Blog.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query PageBlogQuery {
    blogs: allSanityBlog(filter: { show: { eq: true } }) {
      edges {
        node {
          title
          description
          keywords
          slug {
            current
          }
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
  }
`
