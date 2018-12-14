import React, { Component } from 'react'

/*
 *   Hat component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   First big words of the article.
 *
 *   PROPS
 *   children
 *
 */

export default class Hat extends Component {
  render () {
    const props = this.props
    return <div className='lblb-hat'>
      <em>{props.children}</em>
    </div>
  }
}
