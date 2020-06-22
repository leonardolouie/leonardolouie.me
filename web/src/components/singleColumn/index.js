import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import './singleColumn.scss'
import Tag from 'components/tag'
import Button from 'components/button'
import ReactTooltip from 'react-tooltip'

export default function SingleColumn({ keywords, type, title, description, slug, image }) {
  return (
    <div className="single-column mb-10 bg-white flex flex-col sm:flex-row w-full justify-between shadow-xl  py-5 sm:py-10 sm:px-10 items-center rounded-lg">
      <div className="w-64 hidden sm:block">
        <Image className="w-auto h-40 object-fill object-center" fluid={image} />
      </div>
      <div className="w-3/4 ml-5">
        <AniLink cover bg="#252627" to={`${type}/${slug}`}>
          <h2 data-tip data-for={slug} className="text-primary text-2xl">
            {title && title}
          </h2>
          <ReactTooltip id={slug} type="light">
            <span>{`${type}/${slug}`}</span>
          </ReactTooltip>
        </AniLink>
        <p className="text-dim">{description && description}</p>
        <div className="mt-5 mb-2">
          {keywords && (
            <div className="flex flex-wrap sm:w-auto flex-row">
              {keywords.map((value, index) => {
                return <Tag text={value} key={index} />
              })}
            </div>
          )}
        </div>
        <div>
          <Button text={'Read More'} link={`${type}/${slug}`} />
        </div>
      </div>
    </div>
  )
}

SingleColumn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  keywords: PropTypes.array,
  type: PropTypes.string
}
