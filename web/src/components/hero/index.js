import React from 'react'
import PropTypes from 'prop-types'
import LogoList from '../logoList'

export default function Hero({ title, subTitle, body, buttonTitle, social }) {
  return (
    <div className="flex flex-col md:my-32">
      <h1 className="text-white text-center sm:text-left mb-2 text-3xl sm:text-5xl uppercase">{title}</h1>
      {subTitle && (
        <div>
          <p className="text-dim  text-center sm:text-left  sm:text-2xl mt-5 mb-5">{subTitle}</p>
        </div>
      )}
      <div className="mx-auto ">
        <p className="text-dim  text-center sm:text-left  text-xl">{body}</p>
        {buttonTitle && (
          <button className="bg-white hover:bg-dim text-primary font-bold py-2 px-4 rounded-full">{buttonTitle}</button>
        )}
      </div>
      <div className="mt-10">
        <LogoList logolistItem={social} />
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonTitle: PropTypes.string,
  subTitle: PropTypes.string,
  social: PropTypes.array
}
