import React, { Component } from 'react'
import Heading from '../../primitives/Heading'

/*
 *   Paragraph title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Paragraph title heading element. The literary variant
 *   switches to a serif font.
 *
 *   PROPS
 *   level, children, literary
 *
 */

export default class ParagraphTitle extends Component {
  render () {
    const props = this.props
    const classes = ['lblb-paragraph-title']
    if (props.literary) classes.push('lblb-paragraph-title_literary')
    return <div className={classes.join(' ')}>
      <Heading level={props.level || 4}>
        {props.children}
      </Heading>
    </div>
  }
}
