import React from 'react'
import PropTypes from 'prop-types'

export default function Cards({ title, image, imageAlt, description, techTags }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-2xl  mx-4 lg:mx-10 my-2 bg-primary">
      <div className="w-full opacity-100 hover:opacity-25">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="sm:px-6 sm:py-4">
        <a href="https://facebook.com">
          <h2 className="font-bold text-lg mb-2 text-white hover:text-dim">{title}</h2>
        </a>
        <p className="text-grey-darker text-base text-dim ">{description}</p>
      </div>
      <div className="px-6 flex flex-row justify-center">
        {techTags &&
          techTags.map((value, key) => (
            <a className="px-2 opacity-50 hover:opacity-100 focus:opacity-100" href={value.link} key={key}>
              <img className="h-auto w-5  mb-5" src={value.image} alt={value.imageAlt} />
            </a>
          ))}
      </div>
    </div>
  )
}

Cards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  techTags: PropTypes.array
}
