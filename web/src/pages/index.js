import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Hero from '../components/hero'
import Cards from '../components/cards'
import ProfileCard from '../components/profileCard'
import Logo from '../components/logoList'
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Section>
          <Hero />
        </Section>
        <Section
          title={'Tech Stack'}
          subtitle={
            'metus a massa efficitur ullamcorper. Nullam nulla mi, laoreet vitae bibendum eget, pulvinar vitae orci. Cras lobortis leo at rutrum faucibus. Phasellus sagittis aliquet mi non convallis. Proin mattis dui at lorem eleifend, vel fringilla justo porta. Etiam vestibulum, lectus sit amet porttitor tempor, mauris nisl pretium tortor,'
          }
        >
          <Logo />
        </Section>
        <Section
          title={'RECENT PROJECTS/ WORKS'}
          subtitle={'Here are a few recent design projects. Want to see more? Email me.'}
        >
          <Cards
            title={'workgalore'}
            description={
              ' lobortis nec eros. Proin vulputate metus a massa efficitur ullamcorper. Nullam nulla mi, laoreet vitae bibendum eget, pulvinar vitae orci. Cras lobortis leo at rutrum faucibus. Phasellus sagittis aliquet mi non convallis. Proin mattis dui at lorem eleifend, vel fringilla justo porta. Etiam vestibulum, lectus sit amet porttitor tempor, mauris nisl pretium tortor, '
            }
            techTags={[{ 0: { text: 'ruby' }, 1: { text: 'ruby' } }]}
            image={'https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif'}
          />
        </Section>
        <Section title={'Contact me'} subtitle={'Want to work with me ? '}>
          <ProfileCard
            name={'leonardo louie'}
            job="software Engineer"
            location={'manila philippines'}
            promotion={'contact me0'}
            description="hire me "
          />
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
