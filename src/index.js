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
        {alt: '', url: 'http://md0.libe.com/photo/1122002-tolbiac.jpg?modified_at=1526474149'},
        {alt: '', url: 'http://md0.libe.com/photo/1122000-tolbiac.jpg?modified_at=1526474062'},
        {alt: '', url: 'http://md0.libe.com/photo/1121994-tolbiac.jpg?modified_at=1526473849'},
        {alt: '', url: 'http://md0.libe.com/photo/1121995-tolbiac.jpg?modified_at=1526473906'},
        {alt: '', url: 'http://md0.libe.com/photo/1121996-tolbiac.jpg?modified_at=1526473942'},
        {alt: '', url: 'http://md0.libe.com/photo/1121997-tolbiac.jpg?modified_at=1526473954'},
        {alt: '', url: 'http://md0.libe.com/photo/1121998-tolbiac.jpg?modified_at=1526473983'},
        {alt: '', url: 'http://md0.libe.com/photo/1121999-tolbiac.jpg?modified_at=1526474024'},
        {alt: '', url: 'http://md0.libe.com/photo/1122001-tolbiac.jpg?modified_at=1526474117'},
        {alt: '', url: 'http://md0.libe.com/photo/1122003-tolbiac.jpg?modified_at=1526474177'}
      ]
    }
    return (
      <div className='app'>
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
