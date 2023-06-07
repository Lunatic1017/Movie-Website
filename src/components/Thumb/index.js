import React from 'react'
import {Image} from './Thumb.styles'
import {Link} from 'react-router-dom'

const Thumb = ({image , movieId , clickable}) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumbnail'/>
        </Link>
      ) 
    :(
      <Image src={image} alt='movie-thumbnail'/>
    )}
        
    </div>
  )
}

export default Thumb