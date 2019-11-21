import React from 'react'
import PropTypes from 'prop-types'

export default function Cards({ title, image, imageAlt, description, techTags }) {
  console.log(techTags)
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white">
      <img class="w-full" src={image} alt={imageAlt} />
      <div class="px-6 py-4">
        <h1 class="font-bold text-xl mb-2">{title}</h1>
        <p class="text-grey-darker text-base">{description}</p>
      </div>
      <div class="px-6 py-4">
        {techTags &&
          techTags.map((value, index) => (
            <span
              key={index}
              class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
            >
              {value.text}
            </span>
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
  techTags: PropTypes.object
}
