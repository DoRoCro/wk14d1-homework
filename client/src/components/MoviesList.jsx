import React from 'react'
import MovieItem from './MovieItem'

class MoviesList extends React.Component {
  // constructor not needed here, super constructor will be called and make props available in scope

  render () {
    const moviesNodes = this.props.data.map((movie) => {
      return (
        <MovieItem title={movie.title} key={movie.id} >
          {movie.text}
        </MovieItem>
      )
    })

    return (
      <div id='movies-list'>
        <p>UK Opening This Week</p>
        {moviesNodes}
        <div id='see-more'>
          <a id='see-more-link'>See more opening this week >></a>
        </div>
        <div id='get-showtimes'>
          <button id='get-showtimes-button'>Get ShowTimes</button>
        </div>
      </div>
    )
  }
}

export default MoviesList
