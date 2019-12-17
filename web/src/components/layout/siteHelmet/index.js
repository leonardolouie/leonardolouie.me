import React from 'react'
import Helmet from 'react-helmet'

export default function index({ props }) {
  return (
    <Helmet>
      {title && <title>{util.t(siteTitle)}</title>}
      {icon && <link rel="icon" type="image/png" href={icon.fixed.src} />}
      {contentType && <meta property="og:type" content={contentType} />}
      {name && <meta property="og:site_name" content={name} />}
      {location && <meta property="og:url" content={location} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={`https:${image.fluid.src}`} />}
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={image.description} />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={pageAuthor} />}
      <meta name="twitter:title" content={title} />}
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https:${image.fluid.src}`} />
      <meta name="twitter:image:alt" content={image.description} />
      <meta property="twitter:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary" />
      <meta property="article:author" content={'Leonardo Louie'} />}
    </Helmet>
  )
}
