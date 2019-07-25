import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../text-levels/Paragraph'
import { Parser } from 'html-to-react'
import moment from 'moment'

/*
 *   Tweet component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Tweet embed component
 *
 *   PROPS
 *   content, small, big, huge, literary, img, imgAlt
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
    this.h2r = new Parser()
    this.getDataFromContentProp = this.getDataFromContentProp.bind(this)
  }

  /* * * * * * * * * * * * * * * * *
   *
   * GET DATA FROM CONTENT PROP
   *
   * * * * * * * * * * * * * * * * */
  getDataFromContentProp (input) {
    const container = document.createElement('div')
    container.innerHTML += input
    const [blockquote] = container.children
    const tweetContent = blockquote.querySelector('p')
    const signatureText = blockquote.innerHTML.replace(tweetContent.outerHTML, '')
    const signature = document.createElement('div')
    signature.innerHTML = signatureText
    const date = signature.querySelector('a')
    const dateText = date.innerHTML
    moment.locale('en')
    const momentDate = moment(dateText, 'MMMM D, YYYY')
    const displayDate = momentDate.locale('fr').format('D MMMM YYYY')
    const author = signature.innerHTML.replace(date.outerHTML, '').replace('— ', '')
    const tweetLink = date.getAttribute('href')
    return {
      content: tweetContent.innerHTML,
      author: author,
      link: tweetLink,
      date: displayDate
    }
  }

  /* * * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * * */
  render () {
    const { c, h2r, props } = this

    /* Inner logic */
    const { content, author, link, date } = this.getDataFromContentProp(props.content)

    /* Assign classes */
    const classes = [c]
    if (props.small) classes.push(`${c}_small`)
    if (props.big) classes.push(`${c}_big`)
    if (props.huge) classes.push(`${c}_huge`)
    if (props.literary) classes.push(`${c}_literary`)
    if (props.img) classes.push(`${c}_with-img`)

    /* Display component */
    return <div className={classes.join(' ')}>
      <div className={`${c}__image`} style={{ backgroundImage: `url(${props.img})` }}>
        <a href={link}
          rel='noopener noreferrer'
          target='_blank'>
          <img src={props.img} alt={props.imgAlt ? props.imgAlt : 'Image du tweet'} />
        </a>
      </div>
      <div className={`${c}__content`}>
        <Paragraph small={props.small}
          big={props.big}
          huge={props.huge}
          literary={props.literary}>
          {h2r.parse(content)}
        </Paragraph>
      </div>
      <div className={`${c}__meta`}>
        <span className={`${c}__author`}>
          <Paragraph small={(!props.big && !props.huge)}
            big={props.huge}
            literary={props.literary}>
            {author}
          </Paragraph>
        </span>
        <span className={`${c}__date`}>
          <Paragraph small={(!props.big && !props.huge)}
            big={props.huge}
            literary={props.literary}>
            <a href={link}
              rel='noopener noreferrer'
              target='_blank'>
              {date}
            </a>
          </Paragraph>
        </span>
      </div>
    </div>
  }
}

/* * * * * Prop types * * * * */
Tweet.propTypes = {
  prop: PropTypes.string
}

Tweet.defaultProps = {
  content: `<blockquote><p>Tweet vide !</p>&mdash; Anonyme<a href="#">January 1, 1970</a></blockquote>`
}
