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
 *   variables. Does it again every 60 seconds.
 *
 *   PROPS
 *   format, article, period, verbose
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
    const { format, article, verbose } = this.props
    const url = `${api}/${format}/${article}/load`
    if (verbose) console.log('Load...', url)
    if (format && article) {
      libeFetch(url).then(json => {
        if (verbose) console.log('Response: ', json)
      }).catch(err => {
        if (verbose) console.warn('Error:', err)
      })
    }
  }

  /* * * * * * * * * * * * * * * *
   *
   * PING REQUEST
   *
   * * * * * * * * * * * * * * * */
  pingReq () {
    const { tabIsActive } = this
    const { format, article, verbose } = this.props
    const url = `${api}/${format}/${article}/ping`
    if (format && article && !document.hidden) {
      if (verbose) console.log('Ping...', url)
      libeFetch(url).then(json => {
        if (verbose) console.log('Response: ', json)
      }).catch(err => {
        if (verbose) console.warn('Error:', err)
      })
    } else if (document.hidden && verbose) {
      console.log('Tab is not active, ping not sent.')
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
  verbose: PropTypes.bool,
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
  period: 5000,
  verbose: false
}
