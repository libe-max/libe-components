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
 *   format, article
 *
 */

export default class LoadAndPing extends Component {
  constructor () {
    super()
    this.loadReq = this.loadReq.bind(this)
    this.pingReq = this.pingReq.bind(this)
    this.sessionId = Math.random().toString(36).slice(2)
  }

  loadReq () {
    const { format, article } = this.props
    if (format && article) {
      const url = `${api}/${format}/${article}/load`
      libeFetch(url).then(json => {
        console.log(json)
      }).catch(err => {
        console.log(err)
      })
    }
  }

  pingReq () {
    const { format, article } = this.props
    if (format && article) {
      const url = `${api}/${format}/${article}/ping`
      libeFetch(url).then(json => {
        console.log(json)
      }).catch(err => {
        console.log(err)
      })
    } 
  }

  componentDidMount () {
    this.loadReq()
    window.setInterval(this.pingReq, 15000)
  }

  componentWillUnmount () {
    window.clearInterval(this.pingReq)
  }

  render () {
    const props = this.props
    console.log(document.cookie)
    return <div className='lblbl-load-and-ping'></div>
  }
}

/* * * * * Prop types * * * * */

LoadAndPing.propTypes = {
  format: PropTypes.string,
  article: PropTypes.string
}
