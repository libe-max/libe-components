import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    this.state = {
      source: null
    }
  }

  componentDidMount () {
    let url;
    if (this.props.src.includes("youtube")) {
      url = "https://youtube.com/embed/"
      url += this.props.src.split("&")[0].split("?v=")[1]
    }
    else if (this.props.src.includes("dailymotion")) {
      url = "https://www.dailymotion.com/embed/video/"
      url += this.props.src.split("&")[0].split("/").pop()
    }
    else if (this.props.src.includes("ina.fr/video")) {
      url = "https://player.ina.fr/player/embed/"
      url += this.props.src.split("&")[0].split("/").pop()
      url += "/1/1b0bd203fbcd702f9bc9b10ac3d0fc21/wide/1"
    }
    else if (this.props.src.includes("ina")) {
      url = this.props.src
    }
    else return
    this.setState({ source: url })
  }

  /* * * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * * */
  render () {
    const { c } = this

    /* Assign classes */
    const classes = [c]

    /* Display component */
    return <div className={classes.join(' ')} style={{ paddingTop: `${100 /this.props.ratio}%` }}>
      <iframe title={this.state.source} src={this.state.source} scrolling="no" allowFullScreen ></iframe>
    </div>
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
