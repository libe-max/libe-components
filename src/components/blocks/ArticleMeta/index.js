import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import Annotation from '../../text-levels/Annotation'

/*
 *   Article meta component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Displays information about authors and publication and
 *   updation dates
 *
 *   PROPS
 *   authors, publishedOn, updatedOn
 *
 *   PROPS STRUCTURE
 *   authors expects an object litteral or an array of
 *   object litterals, containing 3 fields: name, role, and
 *   link.
 *
 */

export default class ArticleMeta extends Component {
  constructor () {
    super()
    this.c = 'lblb-article-meta'
  }

  render () {
    const { props, c } = this

    const authors = props.authors
      ? Array.isArray(props.authors)
        ? props.authors
        : [props.authors]
      : undefined
    const displayPublishedOn = props.publishedOn
      ? moment(props.publishedOn).format('D MMMM YYYY à HH:MM')
      : undefined
    const displayUpdatedOn = props.updatedOn
      ? moment(props.updatedOn).format('D MMMM YYYY à HH:MM')
      : undefined

    // Group authors by role
    const roles = {}
    authors.forEach(author => {
      const role = !author.role
        ? 'author'
        : author.role
      if (!roles[role]) roles[role] = []
      roles[role].push(author)
    })

    // Convert each author object into a text with a link
    // and a comma before it if needed
    const displayRoles = {}
    for (let role in roles) {
      displayRoles[role] = []
      roles[role].forEach((author, i, src) => {
        const isLast = (i === src.length - 1)
        const displayAuthor = author.link
          ? <a href={author.link}>{author.name}</a>
          : author.name
        if (i !== 0 && isLast) displayRoles[role].push(', et ', displayAuthor)
        else if (i !== 0 && !isLast) displayRoles[role].push(', ', displayAuthor)
        else displayRoles[role].push(displayAuthor)
      })
    }

    const displayNames = [
      <span className={`${c}__role-label`}>Par </span>,
      ...displayRoles.author,
      ' ',
      <span className={`${c}__role-label`}>(production : </span>
    ]

    return <div>
      <Annotation>{displayNames}</Annotation>
    </div>
  }
}
