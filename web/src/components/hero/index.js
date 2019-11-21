import React from 'react'
import github from '../../../static/images/github-brands.svg'
import linkedin from '../../../static/images/linkedin-brands.svg'
import twitter from '../../../static/images/twitter-square-brands.svg'
import instagram from '../../../static/images/instagram-brands.svg'

export default function hero() {
  return (
    <div className="text-center fadedInAnimation">
      <h1 className="text-white text-dim">Full Stack Developer + Music Enthusiast</h1>
      <div className="mx-auto sm:3/4 lg:w-1/2">
        <p className="text-dim mt-5">
          Hi mate ! <span className="text-white">I' m Leonardo Louie Ordonez</span>, consectetur adipiscing elit. Etiam
          eleifend elit nec ante efficitur pretium. Aenean auctor, velit non auctor sollicitudin, sem augue commodo leo,
          ac dictum ex enim ut diam. eleifend elit nec ante efficitur pretium. Aenean auctor, velit non auctor
          sollicitudin, sem augue commodo leo, ac dictum ex enim ut diam.
        </p>
      </div>
      <div className={`flex justify-center mt-20 `}>
        <a href="https://www.linkedin.com/in/leonardo-louie-ordo%C3%B1ez-940673176/">
          <img src={linkedin} className="w-8 md:w-10 mr-5" />
        </a>
        <a href="https://github.com/leonardolouie">
          <img src={github} className="w-8 md:w-10 mr-5" />
        </a>
        <a href="https://twitter.com/louieofficial30">
          <img src={twitter} className="w-8 md:w-10 mr-5" />
        </a>
        <a href="https://instagram.com/leonardolouie/">
          <img src={instagram} className="w-8 md:w-10 mr-5" />
        </a>
      </div>
    </div>
  )
}
