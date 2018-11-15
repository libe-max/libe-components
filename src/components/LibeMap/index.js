import React, { Component } from 'react'
import MapBoxGL from './_MapBoxGL'
import VectorGrid from './_VectorGrid'

export default class LibeMap extends Component {
  constructor () {
    super()
    this.state = {
      lat: 48,
      lon: -2,
      zoom: 13
    }
    this.webGL = (() => {
      try {
        const canvas = document.createElement('canvas')
        return !!window.WebGLRenderingContext &&
          (canvas.getContext('webgl')
            || canvas.getContext('experimental-webgl'))
      } catch (e) {
        return false
      }
    })()
  }

  render () {
    const { props, state, webGL } = this
    const childProps = Object.assign({}, props, state)
    return <div className='libe-map'>{webGL
      ? <MapBoxGL {...childProps} />
      : <VectorGrid {...childProps} />
    }</div>
  }
}
