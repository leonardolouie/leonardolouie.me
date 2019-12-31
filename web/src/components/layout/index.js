import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import PropTypes from 'prop-types'
import SiteHelmet from './siteHelmet'

export default function Layout(props) {
  const { children } = props
  return (
    <>
      <SiteHelmet {...props} />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}
