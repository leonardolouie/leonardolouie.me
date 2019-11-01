import React, { useState } from 'react'
import './header.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleShow = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
            <strong> Leonardo Louie</strong>
          </a>

          <button className="navbar-toggler" onClick={toggleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">
                  Repositories
                </a>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/mdbootstrap/bootstrap-material-design"
                  className="nav-link border border-light rounded"
                  target="_blank"
                >
                  <i className="fab fa-github mr-2"></i>MDB GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
