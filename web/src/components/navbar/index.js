import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import hamburger from 'images/bars-solid.svg'

export default function navbar() {
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!isOpen)
  }

  const navBar = [{ name: 'blogs', link: 'blog' }, { name: 'projects', link: 'project' }]

  return (
    <header className="bg-primary text-white font-bold">
      <div className="py-12 px-5 md:flex justify-between md:px-10 container mx-auto">
        <div className="flex justify-between">
          <div>
            <AniLink duration={0.7} paintDrip hex="#252627" to={'/'}>
              <span className={'text-xl '}>LEONARDO LOUIE</span>
            </AniLink>
          </div>
          <div>
            <img src={hamburger} className="w-6 md:hidden" onClick={handleOpen} />
          </div>
        </div>
        <div>
          <ul className={`py-5 md:py-0 md:flex ${isOpen ? '' : 'hidden'}`}>
            {navbar &&
              navBar.map((value, key) => (
                <li className="md:px-5 lg:px-5 text-xl uppercase hover:text-dim" key={key}>
                  <AniLink duration={0.7} paintDrip hex="#252627" to={value.link}>
                    <span>{value.name}</span>
                  </AniLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
