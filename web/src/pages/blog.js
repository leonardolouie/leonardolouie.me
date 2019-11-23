import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Hero from '../components/hero'

const BlogPage = () => {
  return (
    <>
      <Layout>
        <Section title="Blog Page">
          <Hero title="Currently this page is on development" />
        </Section>
      </Layout>
    </>
  )
}

export default BlogPage
