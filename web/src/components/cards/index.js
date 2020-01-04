import React from 'react'
import PropTypes from 'prop-types'
import './cards.scss'
import ReactTooltip from 'react-tooltip'
import { Link } from 'gatsby'
export default function Cards({ title, image, imageAlt, description, url, slug, type }) {
  return (
    <div className="cards">
      <img className="cards__image" src={image.src} alt={imageAlt} />
      <div className="card__info">
        {url != undefined ? (
          <a href={url}>
            <h1 data-tip data-for={url} className="cards__title">
              {title}{' '}
            </h1>
            <ReactTooltip id={url} type="light">
              <span>{url}</span>
            </ReactTooltip>
          </a>
        ) : (
          <h1 className="cards__title">{title} </h1>
        )}
        <p className="cards__paragraph"> {description} </p>
        {slug && (
          <Link to={`${type}/${slug}`}>
            <button className="cards__button">Read More</button>
          </Link>
        )}
      </div>
    </div>
  )
}

Cards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  url: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string
}
