import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import Section from 'components/section'
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from '../helpers/util.ts'

export default function ProjecTemplate({ data }) {
  const {
    projects: { description, image, url, title, publishedAt, _rawBody }
  } = data

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
          {JSON.stringify(props)}
        </pre>
      ),
      figure: props => <div> 
        <figure>
          {props.node.asset && <img src={urlFor(props.node.asset._ref).width(500).url()} at={props.node.alt}></img>}
        </figure>
        {JSON.stringify(props)}</div>
    }
  }

  return (
    <Layout>
      <Section flexType={'col'}>
        <h1 className="text-white text-3xl">{title && title}</h1>
        <p className="text-dim">{publishedAt && publishedAt}</p>
        <a className="text-white" href={url}>
          {url && url}
        </a>
        <p className="text-white">{description}</p>
        <div className="text-white">
          <BlockContent blocks={_rawBody} serializers={serializers} />
        </div>
      </Section>
    </Layout>
  )
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
