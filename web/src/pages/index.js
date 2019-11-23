import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Hero from '../components/hero'
import Cards from '../components/cards'
import ProfileCard from '../components/profileCard'
import LogoList from '../components/logoList'

import node from '../../static/images/nodejslogo.png'
import react from '../../static/images/react.png'
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
  desscription: 'Alive and grateful'
}
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Section>
          <Hero
            title={'Software Engineer + Music Enthusiast'}
            body={
              'I am Leonardo louie ordonez currenlty software eningeer at unosoft labs. I am full stack developer which is knowledgeable from designing the product until to delivering it to the user. Web and mobile app is my passion to do. Specialize on JAMSTACK (Static Site)'
            }
          ></Hero>
        </Section>
        {/* <Section
          title="Project and Works"
          subtitle="Previous and currently project made by progressive languanges in the world"
        >
          <Cards />
        </Section> */}

        <Section
          title="Tech Stack"
          subtitle="I am working with 1year experience now and a lot of technoliges i have been used for my previous projects. I have started using Laravel PHP, CSS and JQUERY and time goes by I have learned some frameworks of JS like Node and React. On my devops part I am currently using Heroku, Netliy and some services on AWS"
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
