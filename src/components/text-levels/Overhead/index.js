import React, { Component } from 'react'

/*
 *   Overhead component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Text level that is placed over the page title.
 *
 *   PROPS
 *   children
 *
 */

export default class Overhead extends Component {
  render () {
    const props = this.props
    return <div className='lblb-overhead'>
      <span>{props.children}</span>
    </div>
  }
}
