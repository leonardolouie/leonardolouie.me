import React from 'react'
import Section from '../components/section'
import Hero from '../components/hero'
import { Link } from 'gatsby'

const PageNotFound = () => {
  return (
    <>
      <Section>
        <Hero title="404 | Page not found" />
        <Link to="/" className="text-white">
          Go Back
        </Link>
      </Section>
    </>
  )
}

export default PageNotFound
