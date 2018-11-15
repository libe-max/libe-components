import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import VectorGrid from 'react-leaflet-vectorgrid'
import 'leaflet/dist/leaflet.css'

var vectorStyles = {
  water: {  // Apply these options to the "water" layer...
    fill: true,
    weight: 1,
    fillColor: '#06cccc',
    color: '#06cccc',
    fillOpacity: 0.2,
    opacity: 0.4,
  },
  transportation: { // Apply these options to the "transportation" layer...
    weight: 0.5,
    color: '#f2b648',
    fillOpacity: 0.2,
    opacity: 0.4,
  },

  // And so on, until every layer in https://openmaptiles.org/schema/ has a style

  // aeroway:
  // boundary:
  // building:
  // housenumber:
  // landcover:
  // landuse:
  // park:
  // place:
  // poi:
  // transportation:
  // transportation_name:
  // water:
  // water_name:
  // waterway:
};

var openMapTilesUrl = "http://195.154.106.109:2000/styles/osm-liberty/{z}/{x}/{y}.png"

const options = {
  type: 'Slicer',
  url: openMapTilesUrl,
  vectorTileLayerStyles: vectorStyles,
  subdomains: '',
  key: ''
}

export default class LibeMap__VectorGrid extends Component {
  render () {
    return <div className='libe-map__vector-grid'>
      <Map center={[2, 48]}
        zoom={4}
        style={{height: '100%', width: '100%'}}>
        <TileLayer url={"http://195.154.106.109:2000/styles/osm-liberty/{z}/{x}/{y}.png"}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        <VectorGrid {...options} />
      </Map>
    </div>
  }
}
