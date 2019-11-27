import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../text-levels/Paragraph'

/*
 *   Video component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   A video embed from YouTube, Dailymotion or the INA
 *   website
 *
 *   PROPS
 *   src, ratio
 *
 */

export default class Video extends Component {
  /* * * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-video'
    this.guessOriginAndId = this.guessOriginAndId.bind(this)
    this.buildVideoEmbedUrl = this.buildVideoEmbedUrl.bind(this)
  }

  guessOriginAndId (src) {
    let origin
    let id
    if (src.includes("youtube")) {
      origin = 'youtube'
      id = src.split("&")[0].split("?v=")[1]
    }
    else if (src.includes("dailymotion")) {
      origin = 'dailymotion'
      id = src.split("&")[0].split("/").pop()
    }
    else if (src.includes("ina.fr/video")) {
      origin = 'ina'
      id = this.props.src.split("&")[0].split("/").pop()
    }
    else if (src.includes("ina")) {
      origin = 'ina'
      id = null
    }
    else {
      origin = 'file'
      id = null
    }
    return { origin, id }
  }

  buildVideoEmbedUrl (origin, id) {
    switch (origin) {
      case 'youtube':
        return `https://youtube.com/embed/${id}`
      case 'dailymotion':
        return `https://www.dailymotion.com/embed/video/${id}`
      case 'ina':
        return `https://player.ina.fr/player/embed/${id}/1/1b0bd203fbcd702f9bc9b10ac3d0fc21/wide/1`
    }
  }

  /* * * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * * */
  render () {
    const { c, props } = this

    /* Assign classes */
    const classes = [c]

    const { origin, id } = this.guessOriginAndId(props.src)

    if (!origin || (origin != 'file' && !id)) {
      classes.push(`${c}_unknown-source`)
      return <div className={classes.join(' ')}>
        <Paragraph>Source inconnue</Paragraph>
      </div>
    }
    else if (origin == 'file') {
      classes.push(`${c}_file`)
      return <div className={classes.join(' ')}>
        <video controls {...props} />
      </div>
    }
    else {
      classes.push(`${c}_${origin}`)
      /* Display component */
      return <div className={classes.join(' ')} style={{ paddingTop: `${100 /props.ratio}%` }}>
        <iframe
          title={`${origin}-${id}`}
          src={this.buildVideoEmbedUrl(origin, id)}
          scrolling='no'
          allowFullScreen>
        </iframe>
      </div>
    }
  }
}

/* * * * * Prop types * * * * */

Video.propTypes = {
  src: PropTypes.string.isRequired,
  ratio: PropTypes.number
}

Video.defaultProps = {
  ratio: 1.78
}
