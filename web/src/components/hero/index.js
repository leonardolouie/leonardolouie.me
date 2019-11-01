import React from 'react'

const hero = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://650801.smushcdn.com/1257355/wp-content/uploads/2019/02/heroimg.png?lossy=0&strip=1&webp=1"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" />
        </div>
      </div>
    </div>
  )
}
export default hero
