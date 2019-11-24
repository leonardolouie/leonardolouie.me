import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import PropTypes from 'prop-types'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children} <Footer />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}
