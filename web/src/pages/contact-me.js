import React from 'react'
import Layout from 'components/layout'
import Section from 'components/section'
import EmailCard from 'components/emailCard'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const ContactMe = ({ data }) => {
  const { siteSettings} = data
  const { keywords, description, icon, image, author } = siteSettings
  const profilecard = {
    name: 'Leonardo Louie Ordonez',
    job: 'Full Stack Developer | DevOpsEngineer',
    location: 'Manila PH',
    description: 'Email: leonardolouie30@gmail.com'
  }
  

  return (
    <>
      <Layout
        title={'Leonardo Louie | Contact me'}
        description={description}
        image={image}
        keywords={keywords}
        author={author}
        icon={icon}
      >
        <Section
          title="CONTACT ME"
          subtitle="I'm interested on freelance opportunities espcially on innovations and big projects. You can ping me up and send an email if you are."
        >
          <EmailCard  />
        </Section>
    
      </Layout>
    </>
  )
}

export default ContactMe
ContactMe.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query PageContactQuery {
    siteSettings: sanitySiteSettings {
      description
      keywords
      title
      author
      icon {
        caption
        alt
        asset {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      image {
        caption
        alt
        asset {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
`
