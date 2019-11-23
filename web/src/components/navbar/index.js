import React, { useState } from 'react'
import { Link } from 'gatsby'
import hamburger from '../../../static/images/hamburger.png'

export default function navbar() {
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!isOpen)
  }

  const navBar = [
    { name: 'blog', link: 'blog' },
    { name: 'project', link: 'project' },
    { name: 'contact', link: 'contact' }
  ]

  return (
    <header className="bg-primary text-dim font-bold">
      <div className="py-10 px-5 md:flex justify-between md:px-20 container mx-auto">
        <div className="flex justify-between">
          LEONARDO LOUIE <img src={hamburger} className="w-6 md:hidden" onClick={handleOpen} />
        </div>

        <div>
          <ul className={`py-5 md:py-0 md:flex ${isOpen ? '' : 'hidden'}`}>
            {navbar &&
              navBar.map((value, key) => (
                <li className="md:px-5 lg:px-5 uppercase" key={key}>
                  <Link to={value.link}>{value.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
