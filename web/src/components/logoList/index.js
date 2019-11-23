import React from 'react'
export default function Logo({ images }) {
  return (
    <div className="flex flex-wrap justify-center">
      {images &&
        images.map((value, key) => (
          <a href="https://facebook.com" key={key}>
            <img
              className="w-20 h-auto  opacity-75 hover:opacity-100 focus:opacity-100"
              alt={value.imageAlt}
              src={value.image}
            ></img>
          </a>
        ))}
    </div>
  )
}
