import React from 'react'
import github from '../../../static/images/github-brands.svg'
import linkedin from '../../../static/images/linkedin-brands.svg'
import twitter from '../../../static/images/twitter-square-brands.svg'

export default function hero() {
  return (
    <div className="container mx-auto py-20 fadedInAnimation">
      <div className="text-center">
        <h1 className="text-white text-dim mt-20 mb-10">Full Stack Developer + Music Enthusiast</h1>
        <div className="mx-auto sm:3/4 lg:w-1/2">
          <p className="text-dim">
            Hi mate ! <span className="text-white">I' m Leonardo Louie Ordonez</span>, consectetur adipiscing elit.
            Etiam eleifend elit nec ante efficitur pretium. Aenean auctor, velit non auctor sollicitudin, sem augue
            commodo leo, ac dictum ex enim ut diam. eleifend elit nec ante efficitur pretium. Aenean auctor, velit non
            auctor sollicitudin, sem augue commodo leo, ac dictum ex enim ut diam.
          </p>
        </div>
        <div className={`flex justify-center mt-20 `}>
          <img src={github} className="w-10 mr-5 " />
          <img src={linkedin} className="w-10 mr-5" />
          <img src={twitter} className="w-10 mr-5" />
        </div>
      </div>
    </div>
  )
}
