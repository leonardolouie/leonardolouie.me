import React from 'react'
import PropTypes from 'prop-types'

export default function Section({ title, subtitle, children }) {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-white text-dim text-2xl">{title}</h1>
      <p className="text-dim ">{subtitle}</p>
      <div className="mt-10  md:flex md:justify-center">{children}</div>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}
