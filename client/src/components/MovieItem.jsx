import React from 'react'

const MovieItem = (props) => {
  return (
    <div className='movie-item'>
      <h4 className='movie-item-title'>
        {props.title}
      </h4>
      <a className='showtimes'>Showtimes</a>
    </div>
  )
}
export default MovieItem
