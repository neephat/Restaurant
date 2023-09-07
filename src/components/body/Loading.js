
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Loading = () => {
  return (
    <div className='col-12' style={{padding: '60px'}} >
       <FontAwesomeIcon className='snowFlake' icon={faSnowflake} beatFade size="2xl" />
    </div>
  )
}

export default Loading