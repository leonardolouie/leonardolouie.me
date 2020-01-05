import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const  Button = ({text, link, type})=>  {
  return (
  <>
      {type === 'a' ? <a className="text-white bg-red hover:border-transparent" href={link}>{text}</a>  : 
        <button  className="text-primary font-semibold bg-gray-200 rounded-full text-md w-auto py-1 px-4 hover:bg-dim uppercase"> <AniLink to={link} cover bg="#252627">   {text} </AniLink>  </button>}
  </>
  )
}


export default Button


Button.propTypes = {
  text: PropTypes.string,
  link:PropTypes.string,
  type:PropTypes.oneOf(['a'])

}
  