import React from 'react'
import { urlFor } from '../../helpers/util.ts'
import BlockContent from '@sanity/block-content-to-react'


const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      figure: props => <div> 
        <figure>
          {props.node.asset && <img className="shadow-lg" src={urlFor(props.node.asset._ref).width(600).url()} at={props.node.alt}></img>}
        </figure>
      </div>
    }
  }

const Post = ({title, publishedAt, url,  description, _rawBody}) =>{
    return (
    <>
        <h1 className="text-white text-3xl">{title && title}</h1>
        <p className="text-dim mb-2">{publishedAt && publishedAt}</p>
        <p className="text-white mb-10 ">{description}</p>
        {_rawBody && 
        <div className="shadow-lg py-10 px-10 text-justify">
          <BlockContent blocks={_rawBody} serializers={serializers} />
        </div>
        }
     </>
    )
}

export default Post
