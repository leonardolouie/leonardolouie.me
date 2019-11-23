import React from 'react'
import PropTypes from 'prop-types'

export default function Cards({ title, image, imageAlt, description, techTags }) {
  console.log(techTags)
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-2xl mx-5 my-2 bg-primary">
      <div className="w-full opacity-100 hover:opacity-25">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="sm:px-6 sm:py-4">
        <h1 className="font-bold text-xl mb-2 text-dim hover:text-white">{title}</h1>
        <p className="text-grey-darker text-base text-dim  hover:text-white">{description}</p>
      </div>
      <div className="px-6 flex flex-row">
        <a class="px-2 opacity-50 hover:opacity-100 focus:opacity-100" href="https://laravel.com/docs/5.8/queries">
          <img
            class="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg"
            alt=""
            style={{ 'max-height': '60px' }}
          />
        </a>
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
