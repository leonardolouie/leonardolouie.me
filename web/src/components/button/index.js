import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const  Button = ({text, link, type, style, handler})=>  {
  return (
  <>
      {type === 'a' ? <a className="text-white bg-red hover:border-transparent" href={link}>{text}</a>  : 
        <button  onClick={handler} className={`${style ? 'text-white border-2 border-white-700 py-2 px-3 bg-transparent hover:bg-dim' : 'text-primary font-semibold bg-gray-200 rounded-full text-md w-auto py-1 px-4 hover:bg-dim uppercase'}`}> <AniLink to={link} cover bg="#252627">   {text} </AniLink>  </button>}
  </>
  )
}


export default Button


Button.propTypes = {
  text: PropTypes.string,
  link:PropTypes.string,
  type:PropTypes.oneOf(['a']),
  style:PropTypes.oneOf(['outline']),
  handler:PropTypes.func
}
  