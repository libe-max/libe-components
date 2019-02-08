import React, { Component } from 'react'
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
 *   short, url, tweetText, tweetVia, title, description,
 *   iconsOnly
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
    const urlFromProps = props.url
    const urlFromMeta = document.querySelector('meta[property="og:url"]')
      ? document.querySelector('meta[property="og:url"]').getAttribute('content')
      : undefined
    const urlFromHref = window.location.href
    const url = urlFromProps || urlFromMeta || urlFromHref
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
    const urlFromProps = props.url
    const urlFromMeta = document.querySelector('meta[name="twitter:url"]')
      ? document.querySelector('meta[name="twitter:url"]').getAttribute('content')
      : undefined
    const urlFromHref = window.location.href
    const url = urlFromProps || urlFromMeta || urlFromHref
    const txtFromProps = props.tweetText
    const txtFromMeta = document.querySelector('meta[name="custom:tweet-text"]')
      ? document.querySelector('meta[name="custom:tweet-text"]').getAttribute('content')
      : undefined
    const txtFromTitle = document.querySelector('title')
      ? document.querySelector('title').innerText
      : undefined
    const txtDefault = 'Découvrez cet article'
    const txt = txtFromProps || txtFromMeta || txtFromTitle || txtDefault
    const viaFromProps = props.tweetVia
    const viaFromMeta = document.querySelector('meta[name="custom:tweet-via"]')
      ? document.querySelector('meta[name="custom:tweet-via"]').getAttribute('content')
      : '@libe'
    const via = viaFromProps || viaFromMeta
    const tweet = `${txt} ${url} via ${via}`
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
    const titleFromProps = props.title
    const titleFromMeta = document.querySelector('title')
      ? document.querySelector('title').innerText
      : ''
    const title = titleFromProps || titleFromMeta
    const descriptionFromProps = props.description
    const descriptionFromMeta = document.querySelector('meta[name="description"]')
      ? document.querySelector('meta[name="description"]').getAttribute('content')
      : ''
    const description = descriptionFromProps || descriptionFromMeta
    const urlFromProps = props.url
    const urlFromMeta = document.querySelector('link[rel="canonical"]')
      ? document.querySelector('link[rel="canonical"]').getAttribute('href')
      : undefined
    const urlFromHref = window.location.href
    const url = urlFromProps || urlFromMeta || urlFromHref
    const mailSubject = 'Lu sur Libération.fr'
    const mailBody = title +
      '%0D%0A%0D%0A' +
      description +
      '%0D%0A%0D%0A' +
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

    /* Assign classes */
    const classes = [c]
    if (props.short) classes.push(`${c}_short`)
    if (props.iconsOnly) classes.push(`${c}_icons-only`)

    /* Display component */
    return <div className={classes.join(' ')}>
      <button className={`${c}__facebook-button`}
        onClick={this.handleFacebookClick}>
        <Svg src='https://www.liberation.fr/apps/static/assets/facebook-logo-icon_32.svg' />
        <Paragraph>Facebook</Paragraph>
      </button>
      <button className={`${c}__twitter-button`}
        onClick={this.handleTwitterClick}>
        <Svg src='https://www.liberation.fr/apps/static/assets/twitter-logo-icon_32.svg' />
        <Paragraph>Twitter</Paragraph>
      </button>
      <button className={`${c}__printer-button`}
        onClick={this.handlePrinterClick}>
        <Svg src='https://www.liberation.fr/apps/static/assets/printer-icon_32.svg' />
      </button>
      <button className={`${c}__e-mail-button`}
        onClick={this.handleEmailClick}>
        <Svg src='https://www.liberation.fr/apps/static/assets/e-mail-icon_32.svg' />
      </button>
    </div>
  }
}
