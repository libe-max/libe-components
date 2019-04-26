import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { libeFetch } from 'libe-utils'
import { apiRootUrl as api } from '../../.globals.js'

/*
 *   LoadAndPing component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   This component sends a tracking request to
 *   libe-labo.site when mounted. Server responds tokens.
 *   LoadAndPing component stores them as cookies and global
 *   variables. Does it again every 15 seconds.
 *
 *   PROPS
 *   format, article, period
 *
 */

export default class LoadAndPing extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-load-and-ping'
    this.loadReq = this.loadReq.bind(this)
    this.pingReq = this.pingReq.bind(this)
    this.sessionId = Math.random().toString(36).slice(2)
  }

  /* * * * * * * * * * * * * * * *
   *
   * LOAD REQUEST
   *
   * * * * * * * * * * * * * * * */
  loadReq () {
    const { format, article } = this.props
    if (format && article) {
      const url = `${api}/${format}/${article}/load`
      libeFetch(url).catch(err => {
        console.warn(err)
      })
    }
  }

  /* * * * * * * * * * * * * * * *
   *
   * PING REQUEST
   *
   * * * * * * * * * * * * * * * */
  pingReq () {
    const { format, article } = this.props
    if (format && article) {
      const url = `${api}/${format}/${article}/ping`
      libeFetch(url).catch(err => {
        console.warn(err)
      })
    }
  }

  /* * * * * * * * * * * * * * * *
   *
   * DID MOUNT
   *
   * * * * * * * * * * * * * * * */
  componentDidMount () {
    this.loadReq()
    window.setInterval(this.pingReq, this.props.period)
  }

  /* * * * * * * * * * * * * * * *
   *
   * DID UPDATE
   *
   * * * * * * * * * * * * * * * */
  componentWillUnmount () {
    window.clearInterval(this.pingReq)
  }

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  render () {
    const { c } = this
    return <div className={c} />
  }
}

/* * * * * Prop types * * * * */

LoadAndPing.propTypes = {
  format: PropTypes.string,
  article: PropTypes.string,
  period: (props, propName) => {
    const val = props[propName]
    if (val < 1000) {
      return new Error('Period is too low. Min: 10000ms')
    } else if (val > 120000) {
      return new Error('Period is too high. Max: 120000ms')
    }
  }
}

LoadAndPing.defaultProps = {
  period: 60000
}
