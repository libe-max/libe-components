import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import VectorGrid from 'react-leaflet-vectorgrid'
import 'leaflet/dist/leaflet.css'

export default class LibeMap__VectorGrid extends Component {
  render () {
    return <div className='libe-map__vector-grid'>
      <Map center={[2, 48]} zoom={4} style={{height: '100%', width: '100%'}}>
        <TileLayer url="http://195.154.106.109:2000/styles/osm-liberty/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
      </Map>
    </div>
  }
}
