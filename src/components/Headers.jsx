import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Headers = () => {
   return (
      <div>
         <div>
            <input type="text" placeholder='Search' />
            <span><FontAwesomeIcon icon={faSearch} /></span>
         </div>
         <div>
            <span><FontAwesomeIcon icon={faLocationArrow} /></span>
            <span>help me to hold</span>
         </div>
      </div>
   )
}

export default Headers