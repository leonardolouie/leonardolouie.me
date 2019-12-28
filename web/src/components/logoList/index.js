import React from 'react'
import PropTypes from 'prop-types'

export default function LogoList({ logolistItem }) {
  return (
    <div className="flex flex-wrap justify-center">
      {logolistItem &&
        logolistItem.map((value, key) => {
          return (
            <a href={value.link} key={key}>
              <img
                className="w-12 mx-1 opacity-75 hover:opacity-100 focus:opacity-100 logo"
                alt={value.imageAlt}
                src={value.image}
              />
            </a>
          )
        })}
    </div>
  )
}

LogoList.propTypes = {
  logolistItem: PropTypes.array
}
