import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      #{text}
    </span>
  )
}

export default Button

Button.propTypes = {
  text: PropTypes.string
}
