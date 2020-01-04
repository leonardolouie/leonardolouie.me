import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function Section({
  title,
  subtitle,
  children,
  style,
  bottomTitle,
  bottomTitleLink,
  bottomSubTitle,
  flexType
}) {
  const sectionTypes = flexType === undefined || flexType === null ? 'sm:flex-row' : `sm:flex-${flexType}`
  return (
    <div className={style}>
      <div className="container mx-auto py-10 section fadedInAnimation">
        <h1 className="text-white text-center text-white text-2xl">{title && title}</h1>
        <p className="text-dim mx-5 text-center lg:mx-64">{subtitle && subtitle}</p>
        <div className={`flex flex-auto justify-center flex-wrap mt-10 ${sectionTypes}`}>{children}</div>
        <div>
          {bottomTitle && (
            <Link
              className="display block text-dim text-center  mt-16 hover:text-white mx-5 text-2xl lg:mx-64"
              to={bottomTitleLink !== undefined ? bottomTitleLink : ''}
            >
              {bottomTitle}
            </Link>
          )}
          {bottomSubTitle && <p className="text-dim  text-center mx-5 lg:mx-64">{bottomSubTitle} </p>}
        </div>
      </div>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  bottomTitle: PropTypes.string,
  bottomTitleLink: PropTypes.string,
  bottomSubTitle: PropTypes.string,
  background: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string,
  flexType: PropTypes.oneOf(['row', 'col'])
}
