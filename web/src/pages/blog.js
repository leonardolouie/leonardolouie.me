import React from 'react'
import Layout from 'components/layout'
import Section from 'components/section'
import Cards from 'components/cards'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'


const Blog = ({data}) => {
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
        icon={icon}>
        <Section title="RECENT BLOGS">
          {edges &&
            edges.map((value, key) => {
              return (
                <Cards
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

export default Blog
Blog.propTypes = {
  data: PropTypes.object
}



export const query = graphql`
  query PageBlogQuery {
    blogs:  allSanityBlog (filter: { show: { eq: true } }){
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
                  src
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
