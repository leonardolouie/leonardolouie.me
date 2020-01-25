import React from 'react'
import Section from '../components/section'
import Hero from '../components/hero'

const PageNotFound = () => {
  return (
    <>
      <Section bottomTitle="Go back here" bottomTitleLink="/">
        <Hero title="404 | Page not found" />
      </Section>
    </>
  )
}

export default PageNotFound
