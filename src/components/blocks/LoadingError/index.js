import React, { Component } from 'react'
import Paragraph from '../../text-levels/Paragraph'
import LogoGlyph from '../../blocks/LogoGlyph'

/*
 *   Loading error component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Displays an error message and a link to reload the
 *   page
 *
 *   PROPS
 *   - none -
 *
 */

export default class LoadingError extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-loading-error'
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
      <Paragraph>
        Une erreur de chargement est survenue,<br />
        <a href={window.location}>recharger la page ?</a><br /><br />
        <LogoGlyph />
      </Paragraph>
    </div>
  }
}
