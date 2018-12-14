import React, { Component } from 'react'

/*
 *   Slug component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Small one or two words label to place in the header
 *   part of the article, and that describes briefly the
 *   main category of the article
 *
 *   PROPS
 *   children
 *
 */

export default class Slug extends Component {
  render () {
    const props = this.props
    return <span className='lblb-slug'>
      {props.children}
    </span>
  }
}
