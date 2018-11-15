import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './style.css'

import settings from './settings'
import { SimpleDiaporama, LibeMap } from './components/'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {/* <h1>Libé components</h1>
        <p>A presentation of individual components that can be used inside any format for Libération.</p>
        <h3>Simple diaporama</h3>
        <SimpleDiaporama {...settings.simpleDiaporama} />
        <h3>Libe Map</h3> */}
        <LibeMap {...settings.libeMap} />
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
