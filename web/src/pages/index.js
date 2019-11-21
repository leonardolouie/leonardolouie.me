import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Hero from '../components/hero'
import Cards from '../components/cards'
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Section>
          <Hero />
        </Section>
        <Section
          title={'RECENT PROJECTS/ WORKS'}
          subtitle={'Here are a few recent design projects. Want to see more? Email me.'}
        >
          <Cards
            title={'workgalore'}
            description={'workgalore is job portatle'}
            techTags={[{ 0: { text: 'ruby' }, 1: { text: 'ruby' } }]}
            image={
              'https://cdn.vox-cdn.com/thumbor/-yfe-wQQ97IMfzH4AMTN3XknsTk=/0x0:2040x1360/1200x800/filters:focal(831x667:1157x993)/cdn.vox-cdn.com/uploads/chorus_image/image/62954545/vpavic_190128_3196_0002_4.0.jpg'
            }
          />
          <Cards
            title={'workgalore'}
            description={'workgalore is job portatle'}
            techTags={[{ 0: { text: 'ruby' }, 1: { text: 'ruby' } }]}
            image={
              'https://cdn.vox-cdn.com/thumbor/-yfe-wQQ97IMfzH4AMTN3XknsTk=/0x0:2040x1360/1200x800/filters:focal(831x667:1157x993)/cdn.vox-cdn.com/uploads/chorus_image/image/62954545/vpavic_190128_3196_0002_4.0.jpg'
            }
          />
          <Cards
            title={'workgalore'}
            description={'workgalore is job portatle'}
            techTags={[{ 0: { text: 'ruby' }, 1: { text: 'ruby' } }]}
            image={
              'https://cdn.vox-cdn.com/thumbor/-yfe-wQQ97IMfzH4AMTN3XknsTk=/0x0:2040x1360/1200x800/filters:focal(831x667:1157x993)/cdn.vox-cdn.com/uploads/chorus_image/image/62954545/vpavic_190128_3196_0002_4.0.jpg'
            }
          />
          <Cards
            title={'workgalore'}
            description={'workgalore is job portatle'}
            techTags={[{ 0: { text: 'ruby' }, 1: { text: 'ruby' } }]}
            image={
              'https://cdn.vox-cdn.com/thumbor/-yfe-wQQ97IMfzH4AMTN3XknsTk=/0x0:2040x1360/1200x800/filters:focal(831x667:1157x993)/cdn.vox-cdn.com/uploads/chorus_image/image/62954545/vpavic_190128_3196_0002_4.0.jpg'
            }
          />
          <Cards
            title={'workgalore'}
            description={'workgalore is job portatle'}
            techTags={[{ 0: { text: 'ruby' }, 1: { text: 'ruby' } }]}
            image={
              'https://cdn.vox-cdn.com/thumbor/-yfe-wQQ97IMfzH4AMTN3XknsTk=/0x0:2040x1360/1200x800/filters:focal(831x667:1157x993)/cdn.vox-cdn.com/uploads/chorus_image/image/62954545/vpavic_190128_3196_0002_4.0.jpg'
            }
          />
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
