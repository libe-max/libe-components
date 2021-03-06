import React, { Component } from 'react'
import { staticsRootUrl } from '../../.globals.js'
import Svg from '../../primitives/Svg'

/*
 *   Loader component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   A very simple component displaying a loading animation
 *
 *   PROPS
 *   - none -
 *
 */

export default class Loader extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-loader'
  }

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  render () {
    const { c } = this

    /* Assign classes */
    const classes = [c]
    classes.push(`${c}_three-blinking-dots`)

    const loaderIconSrc = `${staticsRootUrl}/assets/loader-icon_64.svg`
    return <div className={classes.join(' ')}>
      <Svg src={loaderIconSrc} />
    </div>
  }
}
