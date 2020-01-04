/* eslint-disable react/display-name */
import React from 'react'
import { urlFor } from '../../helpers/util.ts'
import BlockContent from '@sanity/block-content-to-react'
import Loader from 'react-loader-spinner'
import Button from 'components/button'
import PropTypes from 'prop-types'

const serializers = {
  types: {
    code: props => {
      return (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    },
    figure: props => {
      return (
        <div className="flex w-auto mt-2 mb-2 sm:w-auto justify-center">
          <figure>
            {props.node.asset && (
              <img
                className="shadow-lg"
                src={urlFor(props.node.asset._ref)
                  .width(700)
                  .url()}
                at={props.node.alt}
              ></img>
            )}
          </figure>
        </div>
      )
    }
  }
}

const Post = ({ title, publishedAt, url, description, _rawBody, keywords }) => {
  return (
    <>
      {title ? (
        <div className="flex flex-col">
          <div>
            <h1 className="text-white  text-2xl sm:text-5xl">{title && title}</h1>
            {description && <p className="text-white text-xl">{description}</p>}
            <p className="text-dim mb-2">{publishedAt && publishedAt}</p>
            {url && (
              <a className="text-dim hover:text-white" href={url}>
                {url}
              </a>
            )}
            {keywords && (
              <div className="flex mt-5 flex-row mb-10">
                {keywords.map((value, index) => {
                  return <Button text={value} key={index} />
                })}
              </div>
            )}
          </div>
          {_rawBody && (
            <div className="text-justify">
              <BlockContent blocks={_rawBody} serializers={serializers} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Loader type="Audio" color="#545459" height={150} width={150} />
        </div>
      )}
    </>
  )
}

export default Post

Post.propTypes = {
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  _rawBody: PropTypes.array,
  keywords: PropTypes.array
}
