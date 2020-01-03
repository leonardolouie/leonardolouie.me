import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Logo from '../../../images/mylogo.png'

const SiteHelmet = ({ title, keywords, description, image, author, name }) => {
  const twitterUsername = '@louieofficial30'
  return (
    <Helmet>
      <link rel="icon" type="image/png" href={Logo} />
      {title && <title>{title}</title>}
      {keywords && <meta name="keywords" content={keywords} />}
      {twitterUsername && <meta name="twitter:site" content={twitterUsername} />}
      {author && <meta name="twitter:creator" content={author} />}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image.src} />}
      {image && <meta property="og:image:alt" content={image.alt} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={`https:${image.src}`} />}
      {image && <meta name="twitter:image:alt" content={image.alt} />}
      {author && <meta property="article:author" content={author} />}
      {name && <meta property="og:site_name" content={'leonardo-louie.me'} />}
      <meta property="twitter:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:image:type" content="image/jpeg" />
    </Helmet>
  )
}

export default SiteHelmet

SiteHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
  image: PropTypes.object,
  author: PropTypes.string
}
