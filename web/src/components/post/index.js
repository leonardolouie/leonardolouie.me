/* eslint-disable react/display-name */
import React, { useState } from 'react'
import { urlFor } from '../../helpers/util.ts'
import BlockContent from '@sanity/block-content-to-react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Button from '../button'
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
        <div>
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
        <>
          <h1 className="text-white text-3xl">{title && title}</h1>
          <p className="text-dim mb-2">{publishedAt && publishedAt}</p>
          {url && (
            <a className="text-dim mb-2" href={url}>
              {url}
            </a>
          )}
          <p className="text-white mb-10 ">{description}</p>
          {keywords && (
            <div className="flex flex-row mb-10">
              {keywords.map((value, index) => {
                return <Button text={value} key={index} />
              })}
            </div>
          )}
          {_rawBody && (
            <div className="shadow-lg py-10 px-10 text-justify">
              <BlockContent blocks={_rawBody} serializers={serializers} />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center">
          <Loader
            type="Audio"
            color="#545459"
            height={150}
            width={150}
          />

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
