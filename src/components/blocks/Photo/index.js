import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Parser } from 'html-to-react'
import { staticsRootUrl } from '../../../.globals'
import Svg from '../../primitives/Svg'
import Annotation from '../../text-levels/Annotation'

/*
 *   Photo component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Displays a photo with credits, and expands the image
 *   to fullscreen on click if required
 *
 *   PROPS
 *   src, hdSrc, description, credits, expandable, zIndex
 *
 */

export default class Photo extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-photo'
    this.h2r = new Parser()
    this.escapeListener = ({ key }) => (key === 'Escape'
      ? this.setState({ expanded: false })
      : undefined
    )
    this.state = { expanded: false }
    this.toggleExpand = this.toggleExpand.bind(this)
    this.allowEscapeLeave = this.allowEscapeLeave.bind(this)
  }

  /* * * * * * * * * * * * * * * *
   *
   * TOGGLE EXPAND
   *
   * * * * * * * * * * * * * * * */
  toggleExpand (e) {
    e.stopPropagation()
    const { props } = this
    if (!props.expandable) return
    else this.setState((state) => ({ expanded: !state.expanded }))
  }

  /* * * * * * * * * * * * * * * *
   *
   * ALLOW ESCAPE LEAVE
   *
   * * * * * * * * * * * * * * * */
  allowEscapeLeave (bool) {
    if (bool) window.addEventListener('keydown', this.escapeListener)
    else window.removeEventListener('keydown', this.escapeListener)
  }

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  render () {
    const { c, h2r, props, state } = this

    /* Toggle 'Esc' key strike watch if expanded */
    this.allowEscapeLeave(state.expanded)

    /* Inner logic */
    const inlineStyle = { zIndex: props.expandable && state.expanded ? props.zIndex : null }
    const src = state.expanded && props.hdSrc ? props.hdSrc : props.src

    /* Assign classes */
    const classes = [c]
    if (props.description || props.credits) classes.push(`${c}_with-info-line`)
    if (props.expandable) classes.push(`${c}_expandable`)
    if (props.expandable && state.expanded) classes.push(`${c}_expanded`)
    if (props.small) classes.push(`${c}_small`)
    if (props.big) classes.push(`${c}_big`)
    if (props.huge) classes.push(`${c}_huge`)

    /* Display component */
    return <div className={classes.join(' ')}
      onClick={state.expanded ? this.toggleExpand : null}
      style={inlineStyle}>
      <img className={`${c}__photo`} src={src} onClick={this.toggleExpand} />
      <div className={`${c}__info-line`}>
        <span className={`${c}__description`}>
          <Annotation
            small={props.small}
            big={props.big}
            huge={props.huge}>
            {h2r.parse(props.description)}
          </Annotation>
        </span>
        <span className={`${c}__credits`}>
          <Annotation
            small={props.small}
            big={props.big}
            huge={props.huge}>
            {h2r.parse(props.credits)}
          </Annotation>
        </span>
      </div>
      <button className={`${c}__expand`}
        onClick={this.toggleExpand}>
        <Svg src={`${staticsRootUrl}/assets/expand-arrows-icon_40.svg`} />
      </button>
      <button className={`${c}__collapse`}>
        <Svg src={`${staticsRootUrl}/assets/tilted-cross-icon_40.svg`} />
      </button>
    </div>
  }
}

/* * * * * Prop types * * * * */

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  hdSrc: PropTypes.string,
  description: PropTypes.string,
  credits: PropTypes.string,
  expandable: PropTypes.bool,
  zIndex: PropTypes.number
}

Photo.defaultProps = {
  zIndex: 1000,
  expandable: false
}
