import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
export default function LogoList({ logolistItem }) {
  return (
    <div className="flex justify-center sm:justify-start  flex-wrap">
      {logolistItem &&
        logolistItem.map((value, key) => {
          return (
            <a href={value.link} key={key}>
              <img data-tip data-for={value.link} className="w-10 mx-1 logo" alt={value.imageAlt} src={value.image} />
              <ReactTooltip id={value.link} type="light">
                <span>{value.link}</span>
              </ReactTooltip>
            </a>
          )
        })}
    </div>
  )
}

LogoList.propTypes = {
  logolistItem: PropTypes.array
}
