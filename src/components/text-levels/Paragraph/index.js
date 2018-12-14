import React, { Component } from 'react'

/*
 *   Paragraph component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Text level that is used for regular text.
 *
 *   PROPS
 *   children, literary
 *
 */

export default class Paragraph extends Component {
  render () {
    const props = this.props
    const classes = ['lblb-paragraph']
    if (props.literary) classes.push('lblb-paragraph_literary')
    return <p className={classes.join(' ')}>
      {props.children}
    </p>
  }
}
