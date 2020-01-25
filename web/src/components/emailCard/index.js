import React from 'react'
import PropTypes from 'prop-types'

const EmailCard = () => {
  return (
    <div className="py-10 px-5 w-full lg:w-9/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white lg:mx-0 bg-primary text-white">
      <div className="flex flex-row"> 
        <div> 
          <input className="appearance-none block w-full bg-gray-200 text-white bg-dim  rounded py-3 px-4 mb-3 " id="grid-first-name" type="text"  value="Name"/>
        </div>
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
