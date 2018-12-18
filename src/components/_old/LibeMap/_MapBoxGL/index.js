import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import mapStyle from './style.json'
import 'mapbox-gl/dist/mapbox-gl.css'

export default class LibeMap_MapboxGL extends Component {
  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.$root,
      style: mapStyle
    })
  }

  componentWillUnmount () {
    this.map.remove()
  }

  render () {
    return <div className='libe-map__mapbox-gl'
      ref={n => this.$root = n}>
    </div>
  }
}
