import React, { Component } from 'react'

/*
 *   Annotation component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Text level that is used for support information to
 *   main content.
 *
 *   PROPS
 *   children
 *
 */

export default class Annotation extends Component {
  render () {
    const props = this.props
    const classes = ['lblb-annotation']
    if (props.literary) classes.push('lblb-annotation_literary')
    return <p className={classes.join(' ')}>
      {props.children}
    </p>
  }
}
