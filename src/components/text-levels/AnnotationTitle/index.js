import React, { Component } from 'react'
import Heading from '../../primitives/Heading'

/*
 *   Annotation title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Annotation title heading element.
 *
 *   PROPS
 *   level, children
 *
 */

export default class AnnotationTitle extends Component {
  render () {
    const props = this.props
    return <div className='lblb-annotation-title'>
      <Heading level={props.level || 5}>
        {props.children}
      </Heading>
    </div>
  }
}
