import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
 *   Template component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Template file for making a lblb component
 *
 *   PROPS
 *   - none -
 *
 */

export default class LblbComponentTemplate extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-component-template'
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

    /* Display component */
    return <div className={classes.join(' ')}>
      Component template
    </div>
  }
}

/* * * * * Prop types * * * * */

LblbComponentTemplate.propTypes = {
  prop: PropTypes.string
}
LblbComponentTemplate.defaultProps = {
  prop: null
}
