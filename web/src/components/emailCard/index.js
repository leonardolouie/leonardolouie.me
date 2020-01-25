import React, { useState } from 'react'
import Button from 'components/button'
import PropTypes from 'prop-types'

const EmailCard = () => {

  const [state, setState] = useState({
    email: '',
    subject:'',
    message:''

  })
  const handleClick = () => { 
    
  }

  const handleChange = (evt)  =>{
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value
    })
  }
  return (
    <div className="py-2 px-2 md:py-10 md:px-24 w-full lg:w-9/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white lg:mx-0 bg-primary text-white">
      <div className="flex flex-col"> 
        <input id="email" name="email" className="appearance-none block w-full bg-gray-200 text-white bg-dim  rounded py-3 px-4 mb-3 placeholder-white" type="email"  placeholder="Email"  onChange={handleChange} required/>
        <input id="subject" name="subject" className="appearance-none block w-full bg-gray-200 text-white bg-dim  rounded py-3 px-4 mb-3  placeholder-white"  type="text"  placeholder="Subject"  onChange={handleChange} required/>
        <textarea  id="message"  name="message" className="appearance-none block w-full bg-gray-200 text-white bg-dim  rounded py-3 px-4 mb-3 placeholder-white"  rows="7"   onChange={handleChange} required> </textarea>
        <Button text="Send" style="outline" handler={handleClick}/>
      </div>
    </div>
  )
}

export default EmailCard

EmailCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  promotion: PropTypes.string
}
