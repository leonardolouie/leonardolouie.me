import React from 'react'
import PropTypes from 'prop-types'

export default function LogoList({ logolistItem }) {
  return (
    <div className="flex flex-wrap">
      {logolistItem &&
        logolistItem.map((value, key) => {
          return (
            <a href={value.link} key={key}>
              <img className="w-10 mx-1 logo" alt={value.imageAlt} src={value.image} />
            </a>
          )
        })}
    </div>
  )
}

LogoList.propTypes = {
  logolistItem: PropTypes.array
}
