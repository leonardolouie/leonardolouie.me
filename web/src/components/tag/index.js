import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ text }) => {
  return (
    <span className="mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      #{text}
    </span>
  )
}

export default Tag

Tag.propTypes = {
  text: PropTypes.string
}
