import React from 'react'
import PropTypes from 'prop-types'

export default function Hero({ title, body, buttonTitle }) {
  return (
    <div className="flex flex-col sm:my-40 text-center items-center">
      <h1 className="text-dim  mb-2 text-3xl sm:text-4xl">{title}</h1>
      <div className="mx-auto ">
        <p className="text-dim mb-5">{body}</p>
        <button className="bg-white hover:bg-dim text-primary font-bold py-2 px-4 rounded-full">{buttonTitle}</button>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonTitle: PropTypes.string
}
