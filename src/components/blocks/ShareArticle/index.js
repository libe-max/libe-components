import React, { Component } from 'react'
import { staticsRootUrl } from '../../.globals.js'
import Svg from '../../primitives/Svg'
import Paragraph from '../../text-levels/Paragraph'

/*
 *   Share article component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   A block for sharing the article via Facebook, Twitter,
 *   e-mail or printer.
 *
 *   PROPS
 *   short, iconsOnly, url, tweet
 *
 */

export default class ShareArticle extends Component {
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-share-article'
    this.handleFacebookClick = this.handleFacebookClick.bind(this)
    this.handleTwitterClick = this.handleTwitterClick.bind(this)
    this.handlePrinterClick = this.handlePrinterClick.bind(this)
    this.handleEmailClick = this.handleEmailClick.bind(this)
  }

  /* * * * * * * * * * * * * * * *
   *
   * HANDLE FACEBOOK CLICK
   *
   * * * * * * * * * * * * * * * */
  handleFacebookClick () {
    const { props } = this
    const url = props.url || window.location.href
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
    const features = 'width=575, height=400, menubar=no, toolbar=no'
    return window.open(facebookUrl, '', features)
  }

  /* * * * * * * * * * * * * * * *
   *
   * HANDLE TWITTER CLICK
   *
   * * * * * * * * * * * * * * * */
  handleTwitterClick () {
    const { props } = this
    const url = props.url || window.location.href
    const txtFromProps = props.tweet
    const txtFromTitle = document.querySelector('title')
      ? document.querySelector('title').innerText
      : undefined
    const txtDefault = 'Découvrez cet article'
    const txt = txtFromProps || txtFromTitle || txtDefault
    const tweet = `${txt} ${url}`
    const twitterUrl = `https://twitter.com/intent/tweet?original_referer=&text=${tweet}`
    const features = 'width=575, height=400, menubar=no, toolbar=no'
    return window.open(twitterUrl, '', features)
  }

  /* * * * * * * * * * * * * * * *
   *
   * HANDLE PRINTER CLICK
   *
   * * * * * * * * * * * * * * * */
  handlePrinterClick () {
    return window.print()
  }

  /* * * * * * * * * * * * * * * *
   *
   * HANDLE EMAIL CLICK
   *
   * * * * * * * * * * * * * * * */
  handleEmailClick () {
    const { props } = this
    const title = document.querySelector('title')
      ? document.querySelector('title').innerText
      : ''
    const description = document.querySelector('meta[name="description"]')
      ? document.querySelector('meta[name="description"]').getAttribute('content')
      : ''
    const url = props.url || window.location.href
    const mailSubject = 'Lu sur Libération.fr'
    const mailBody = title +
      '%0D%0A' +
      description +
      '%0D%0A' +
      'Retrouvez cet article sur le site de Libération :' +
      '%0D%0A' +
      url
    const href = `mailto:?subject=${mailSubject}&body=${mailBody}`
    return window.open(href, '', '')
  }

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  render () {
    const { props, c } = this
    const facebookIconSrc = `${staticsRootUrl}/assets/facebook-logo-icon_32.svg`
    const twitterIconSrc = `${staticsRootUrl}/assets/twitter-logo-icon_32.svg`
    const printIconSrc = `${staticsRootUrl}/assets/printer-icon_32.svg`
    const mailIconSrc = `${staticsRootUrl}/assets/e-mail-icon_32.svg`

    /* Assign classes */
    const classes = [c]
    if (props.short) classes.push(`${c}_short`)
    if (props.iconsOnly) classes.push(`${c}_icons-only`)

    /* Display component */
    return <div className={classes.join(' ')}>
      <button className={`${c}__facebook-button`}
        onClick={this.handleFacebookClick}>
        <Svg src={facebookIconSrc} />
        <Paragraph>Facebook</Paragraph>
      </button>
      <button className={`${c}__twitter-button`}
        onClick={this.handleTwitterClick}>
        <Svg src={twitterIconSrc} />
        <Paragraph>Twitter</Paragraph>
      </button>
      <button className={`${c}__printer-button`}
        onClick={this.handlePrinterClick}>
        <Svg src={printIconSrc} />
      </button>
      <button className={`${c}__e-mail-button`}
        onClick={this.handleEmailClick}>
        <Svg src={mailIconSrc} />
      </button>
    </div>
  }
}
