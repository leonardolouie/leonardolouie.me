import React from 'react'

export default function navbar() {
  return (
    <header className="bg-primary text-dim font-bold">
      <div className="py-10 px-5 md:flex justify-between md:px-20 container mx-auto">
        <div>LEONARDO LOUIE</div>
        <div>
          <ul className="py-5 md:py-0 md:flex">
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
