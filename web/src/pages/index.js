import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Hero from '../components/hero'
import Cards from '../components/cards'
import ProfileCard from '../components/profileCard'
import LogoList from '../components/logoList'

import node from '../../static/images/nodejslogo.png'
import gatsby from '../../static/images/gatsby.png'
import laravel from '../../static/images/laravel.png'
import graphql from '../../static/images/graphql.png'
import tailwind from '../../static/images/tailwind.png'
import contentful from '../../static/images/contentful.png'
import sanity from '../../static/images/sanity.png'
import redux from '../../static/images/redux.png'

import twitter from '../../static/images/twitter-brands.svg'
import instagram from '../../static/images/instagram-brands.svg'
import github from '../../static/images/github-alt-brands.svg'
import facebook from '../../static/images/facebook-.svg'
import linkedin from '../../static/images/linkedin-brands.svg'

const LogoListItem = [
  {
    image: gatsby,
    imageAlt: 'Gatsby Js',
    link: 'https://reactjs.org/'
  },
  {
    image: node,
    imageAlt: 'Node Js ',
    link: 'https://nodejs.org/en/'
  },
  {
    image: laravel,
    imageAlt: 'Laravel',
    link: 'https://laravel.com/'
  },
  {
    image: graphql,
    imageAlt: 'https://laravel.com/',
    link: 'https://graphql.org'
  },
  {
    image: contentful,
    imageAlt: 'Contentful',
    link: 'https://www.contentful.com/'
  },
  {
    image: sanity,
    imageAlt: 'Sanity',
    link: 'https://www.sanity.io/'
  },
  {
    image: tailwind,
    imageAlt: 'Tailwind',
    link: 'https://tailwindcss.com/'
  },
  {
    image: redux,
    imageAlt: 'redux',
    link: 'https://redux.js.org/'
  }
]

const profilecard = {
  name: 'Leonardo Louie Ordonez',
  job: 'Software Engineer @ Unosoft Labs',
  location: 'Manila PH',
  social: [
    { image: twitter, link: 'https://twitter.com/louieofficial30', imageAlt: 'twitter' },
    { image: instagram, link: 'https://instagram.com/leonardolouie', imageAlt: 'twitter' },
    { image: github, link: 'https://github.com/leonardolouie', imageAlt: 'github' },
    { image: facebook, link: 'https://facebook.com/leonardolouie30', imageAlt: 'facebook' },
    {
      image: linkedin,
      link: 'https://www.linkedin.com/in/leonardo-louie-ordo%C3%B1ez-940673176/',
      imageAlt: 'linkedin'
    }
  ],
  description: 'Email: leonardolouie30@gmail.com'
}
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Section>
          <Hero
            title={'Software Engineer + Music Enthusiast'}
            body={
              'I am/ This is Leonardo Louie Ordoñez currenlty software eningeer at Unosoft Labs. I am full stack developer which is knowledgeable from designing the product until to delivering it to the user. Web and mobile app is my passion to do. Specialize on JAMSTACK (Static Site)'
            }
          ></Hero>
        </Section>
        <Section
          title="Project and Works"
          subtitle="Previous and currently project made by progressive programming languanges in the world"
        >
          <Cards
            title="https://workgalore.com"
            image={'https://www.intrepiditservices.com/assets/mobile/android.jpg'}
            description={'made with'}
            techTags={[{ image: node }, { image: gatsby }]}
          />
          <Cards title="Olap Cemetery" image={'https://www.intrepiditservices.com/assets/mobile/android.jpg'} />
          <Cards
            title="Olap Cemetery"
            image={'https://eci.gov.in/uploads/monthly_2019_01/large.4.png.61bcef5b210d6b08be9d5fd7df1fbc2f.png'}
          />
          <Cards title="Olap Cemetery" image={'https://www.intrepiditservices.com/assets/mobile/android.jpg'} />
          <Cards title="Olap Cemetery" image={'https://www.intrepiditservices.com/assets/mobile/android.jpg'} />
          <Cards title="Olap Cemetery" image={'https://www.intrepiditservices.com/assets/mobile/android.jpg'} />
        </Section>

        <Section
          title="Tech Stack"
          subtitle="I have been working for a year now, with lots of technologies encountered and used for the projects I made. I've started my web development career by using Laravel PHP, CSS and JQUERY. As the time goes by I learned more frameworks of JS such as Node and React. On the other hand, for DevOps part I am currently using Heroku, Netlify and some services on AWS."
        >
          <LogoList logolistItem={LogoListItem} />
        </Section>

        <Section
          title="Contact Me"
          subtitle="I want to work with you. You can ping me up from all the social media site's below"
        >
          <ProfileCard {...profilecard} />
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
