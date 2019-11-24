import React from 'react'
import PropTypes from 'prop-types'

export default function Section({ title, subtitle, children }) {
  return (
    <div className="container mx-auto  text-center py-20 section fadedInAnimation">
      <h1 className="text-white text-white text-2xl">{title}</h1>
      <p className="text-dim mx-5 lg:mx-64">{subtitle}</p>
      <div className="flex  flex-wrap sm:flex-row justify-center items-center mt-10">{children}</div>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}
