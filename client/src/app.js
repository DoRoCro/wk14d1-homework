import React from 'react'
import ReactDOM from 'react-dom'
import MoviesListBox from './components/MoviesListBox'

window.onload = function () {
  ReactDOM.render(
    <MoviesListBox />,
    document.getElementById('app')
  )
}
