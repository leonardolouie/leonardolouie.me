import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import PropTypes from 'prop-types'
import SiteHelmet from './siteHelmet'
import SiteMessenger from './siteMessenger'
export default function Layout(props) {
  const { children, icon } = props
  return (
    <>
      <SiteHelmet {...props} />
      <SiteMessenger/>
      <Navbar icon={icon} />
      {children}
      <Footer />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  icon: PropTypes.object
}
