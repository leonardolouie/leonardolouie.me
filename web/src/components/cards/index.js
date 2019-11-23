import React from 'react'
import PropTypes from 'prop-types'

export default function Cards({ title, image, imageAlt, description, techTags }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-2xl mx-5 my-2 bg-primary">
      <div className="w-full opacity-100 hover:opacity-25">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="sm:px-6 sm:py-4">
        <h2 className="font-bold text-xl mb-2 text-dim hover:text-white">{title}</h2>
        <p className="text-grey-darker text-base text-dim  hover:text-white">{description}</p>
      </div>
      <div className="px-6 flex flex-row">
        {techTags &&
          techTags.map((value, key) => (
            <a className="px-2 opacity-50 hover:opacity-100 focus:opacity-100" href={value.link} key={key}>
              <img className="w-full" src={value.image} alt={value.imageAlt} style={{ maxHeight: '60px' }} />
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
