import React, { useState } from 'react'
import hamburger from '../../../static/images/hamburger.png'
export default function navbar() {
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!isOpen)
  }
  return (
    <header className="bg-primary text-dim font-bold">
      <div className="py-10 px-5 md:flex justify-between md:px-20 container mx-auto">
        <div className="flex justify-between">
          LEONARDO LOUIE <img src={hamburger} className="w-6 md:hidden" onClick={handleOpen} />
        </div>

        <div>
          <ul className={`py-5 md:py-0 md:flex ${isOpen ? '' : 'hidden'}`}>
            <li className="md:px-5 lg:px-5">CONTACTS</li>
            <li className="md:px-5 lg:px-5">BLOG</li>
            <li className="md:px-5 lg:px-5">PROJECTS</li>
            <li className="md:px-5 lg:px-5">ABOUT</li>
          </ul>
        </div>
      </div>
    </header>
  )
}
