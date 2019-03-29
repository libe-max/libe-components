import React, { Component } from 'react'
import { staticsRootUrl } from '../../../.globals.js'

/*
 *   Libé Labo logo component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Simple display of the Logo
 *
 *   PROPS
 *   - none -
 *
 */

export default class LibeLaboLogo extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-libe-labo-logo'
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

    return <div className={classes.join(' ')}>
      <a href='https://www.liberation.fr/libe-labo-data-nouveaux-formats,100538'>
        <img width='100%' src={`${staticsRootUrl}/assets/libe-labo-logo.svg`} />
      </a>
    </div>
  }
}