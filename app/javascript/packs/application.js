import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import MapContainer from '../containers/MapContainer'


document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('map')
  console.log('Hello World from Webpacker')

  if (reactElement) {
    ReactDOM.render(
      <App />,
      reactElement
    )
  }
})
