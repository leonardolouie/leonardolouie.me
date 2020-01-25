import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import hamburger from 'images/bars-solid.svg'
import PropTypes from 'prop-types'

export default function navbar({ icon }) {
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!isOpen)
  }

  const navBar = [{ name: 'projects', link: 'project' }, { name: 'blogs', link: 'blog' }, { name: 'Contact', link: 'contact-me' }]

  return (
    <header className="bg-primary text-white font-bold">
      <div className="py-5 px-5 md:flex justify-between items-center md:px-1 container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <AniLink duration={0.7} paintDrip hex="#252627" to={'/'}>
              {icon && <img className="w-20 h-20" src={icon.asset.fluid.src} />}
            </AniLink>
          </div>
          <div>
            <img src={hamburger} className="w-6 md:hidden" onClick={handleOpen} />
          </div>
        </div>
        <div className="px-5 sm:px-0">
          <ul className={`py-5 md:py-0 md:flex ${isOpen ? '' : 'hidden'}`}>
            {navbar &&
              navBar.map((value, key) => {
                return (
                  <li className="md:px-5 lg:px-5 text-xl uppercase hover:text-dim" key={key}>
                    <AniLink duration={0.7} paintDrip hex="#252627" to={value.link}>
                      <span>{value.name}</span>
                    </AniLink>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </header>
  )
}

navbar.propTypes = {
  icon: PropTypes.object
}
