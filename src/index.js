import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './style.css'

import {SimpleDiaporama} from './components'

class App extends React.Component {
  render () {
    const simpleDiaporamaProps = {
      height: 500,
      images: [
        {alt: 'some alt text', url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1436123874000/photosp/cd384c08-7f8a-4742-8c7c-36b219596138/stock-photo-night-dancing-nightlife-music-crowd-lights-stage-band-festival-cd384c08-7f8a-4742-8c7c-36b219596138.jpg'},
        {alt: 'some alt text', url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1473727274000/photosp/d4c70a25-0755-424e-877c-fa523a425d0b/stock-photo-generic-ketchup-d4c70a25-0755-424e-877c-fa523a425d0b.jpg'},
        {alt: 'some alt text', url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1464054006000/photosp/93c077ad-7fc6-4c2d-b346-d9d679c4af0a/stock-photo-summer-green-flag-golf-hole-golf-ball-golf-club-putter-generic-93c077ad-7fc6-4c2d-b346-d9d679c4af0a.jpg'},
        {alt: 'some alt text', url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1440595241000/photosp/678b7268-cb0e-4865-b070-34194ab4ba1d/stock-photo-organic-coffee-sack-rain-forest-canvas-beans-peru-arabica-gunny-sack-678b7268-cb0e-4865-b070-34194ab4ba1d.jpg'},
        {alt: 'some alt text', url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1462809830000/photosp/b8e3edaf-0c17-4c7c-b0a8-a8d685d16c32/stock-photo-pattern-adult-blue-fun-art-triangle-color-coloring-colouring-b8e3edaf-0c17-4c7c-b0a8-a8d685d16c32.jpg'},
        {alt: 'some alt text', url: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1503135541000/photosp/28139eb5-6126-48ce-8f16-4536dead27bb/stock-photo-coffee-cup-packaging-takeout-disposable-cafes-hot-drinks-coffee-to-go-takeaway-coffee-28139eb5-6126-48ce-8f16-4536dead27bb.jpg'}
      ]
    }
    return (
      <div className="app">
        <h1>Libé components</h1>
        <p>A presentation of individual components that can be used inside any format for Libération.</p>
        <h3>Simple diaporama</h3>
        <SimpleDiaporama {...simpleDiaporamaProps} />
      </div>
    )
  }
}

// Rendering app ----------
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
