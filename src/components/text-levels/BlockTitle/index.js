import React, { Component } from 'react'
import Heading from '../../primitives/Heading'

/*
 *   Block title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Block title heading element.
 *
 *   PROPS
 *   level, children
 *
 */

export default class BlockTitle extends Component {
  render () {
    const props = this.props
    return <div className='lblb-block-title'>
      <Heading level={props.level || 4}>
        {props.children}
      </Heading>
    </div>
  }
}
