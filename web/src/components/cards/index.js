import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

export default function Cards({ title, image, imageAlt, description, techTags, url }) {
  return (
    <div className="mb-10 max-w-xs rounded-lg overflow-hidden shadow-2xl  mx-4 lg:mx-10 my-2 bg-primary">
      <div className="w-full">
        <Image fluid={image} alt={imageAlt} />
      </div>
      <div className="mt-5 sm:px-6 sm:py-4">
        <a href={url}>
          <h2 className="font-bold text-lg text-center text-white hover:text-dim">{title}</h2>
        </a>
        <p className="text-grey-darker  text-center text-base text-dim ">{description}</p>
      </div>
      <div className="px-6 flex flex-row justify-center">
        {techTags &&
          techTags.map((value, key) => {
            return (
              <a className="px-2 opacity-50 hover:opacity-100 focus:opacity-100" href={value.site} key={key}>
                <Image className="h-auto w-8  mb-5" fluid={value.image.asset.fluid} alt={value.image.description} />
              </a>
            )
          })}
      </div>
    </div>
  )
}

Cards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  url: PropTypes.string,
  techTags: PropTypes.array
}
