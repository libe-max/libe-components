import React, { Component } from 'react'
import Heading from '../../primitives/Heading'

/*
 *   Inter title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Inter title heading element.
 *
 *   PROPS
 *   level, children
 *
 */

export default class InterTitle extends Component {
  render () {
    const props = this.props
    return <div className='lblb-inter-title'>
      <Heading level={props.level || 2}>
        {props.children}
      </Heading>
    </div>
  }
}
