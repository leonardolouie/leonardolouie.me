import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function SingleColumn({ title, description, slug: { current: slug } }) {
  return (
    <div className="mb-10">
      <AniLink cover bg="#252627" to={`projects/${slug}`}>
        <h2 className="text-white text-2xl">{title && title}</h2>
      </AniLink>
      <p className="text-dim">{description && description}</p>
    </div>
  )
}

SingleColumn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.object
}
