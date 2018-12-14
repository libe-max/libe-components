import React, { Component } from 'react'
import Heading from '../../primitives/Heading'

/*
 *   Page title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Page title heading element.
 *
 *   PROPS
 *   level, children
 *
 */

export default class PageTitle extends Component {
  render () {
    const props = this.props
    return <div className='lblb-page-title'>
      <Heading level={props.level || 1}>
        {props.children}
      </Heading>
    </div>
  }
}
