import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { proxyRootUrl } from '../../.globals.js'
import Paragraph from '../../text-levels/Paragraph'
// import moment from 'moment'

/*
 *   Tweet component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Tweet embed component
 *
 *   PROPS
 *   url, small, big, huge, literary
 *
 */

export default class Tweet extends Component {
  /* * * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-tweet'
    this.state = {
      loading: true,
      error: null,
      tweet_data: null
    }
  }

  componentDidMount () {
    const splitdUrl = this.props.url.split('/')
    const tweetId = splitdUrl.slice(-1)
    window.fetch(`${proxyRootUrl}/twitter/status/${tweetId}`)
      .then(r => r.json())
      .then(res => res.err
        ? this.setState({ loading: false, error: res.err })
        : this.setState({ loading: false, error: null, tweet_data: res.data })
      ).catch(err => this.setState({ loading: false, error: err, tweet_data: null }))
  }

  /* * * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * * */
  render () {
    const { c, props, state } = this

    /* Inner logic */
    const hasImg = state.tweet_data
      && state.tweet_data.entities.media
      && state.tweet_data.entities.media.length
    const imgUrl = hasImg
      ? state.tweet_data.entities.media[0].media_url_https
      : ''

    /* Assign classes */
    const classes = [c]
    if (state.loading) classes.push(`${c}_loading`)
    if (props.small) classes.push(`${c}_small`)
    if (props.big) classes.push(`${c}_big`)
    if (props.huge) classes.push(`${c}_huge`)
    if (props.literary) classes.push(`${c}_literary`)
    if (hasImg) classes.push(`${c}_with-img`)

    /* Display component */
    if (state.loading) {
      return <div className={classes.join(' ')}>
        Tweet LOADING
      </div>
    } else if (state.error) {
      return <div className={classes.join(' ')}>
        Tweet ERROR
      </div>
    } else {
      return <div className={classes.join(' ')}>
      <div className={`${c}__image`} style={{ backgroundImage: `url(${imgUrl})` }}>
        <a href={'link'} rel='noopener noreferrer' target='_blank'><img src={imgUrl} /></a>
      </div>
      <div className={`${c}__content`}>
        <Paragraph small={props.small}
          big={props.big}
          huge={props.huge}
          literary={props.literary}>
          {state.tweet_data.full_text}
        </Paragraph>
      </div>
      <div className={`${c}__meta`}>
        <span className={`${c}__author`}>
          <Paragraph small={(!props.big && !props.huge)}
            big={props.huge}
            literary={props.literary}>
            {'author'}
          </Paragraph>
        </span>
        <span className={`${c}__date`}>
          <Paragraph small={(!props.big && !props.huge)}
            big={props.huge}
            literary={props.literary}>
            <a href={'link'}
              rel='noopener noreferrer'
              target='_blank'>
              {'date'}
            </a>
          </Paragraph>
        </span>
      </div>
    </div>
    }
  }
}

/* * * * * Prop types * * * * */
Tweet.propTypes = {
  url: PropTypes.string
}

Tweet.defaultProps = {
  url: '20'
}
