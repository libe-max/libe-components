import React, { Component } from 'react'
import Heading from '../../primitives/Heading'

/*
 *   Section title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Section title heading element.
 *
 *   PROPS
 *   level, children
 *
 */

export default class SectionTitle extends Component {
  render () {
    const props = this.props
    return <div className='lblb-section-title'>
      <Heading level={props.level || 3}>
        {props.children}
      </Heading>
    </div>
  }
}
