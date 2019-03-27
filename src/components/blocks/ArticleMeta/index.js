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
  /* * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-article-meta'
  }

  /* * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * */
  render () {
    const { props, c } = this

    // Group authors by role, ordered by first appearance
    // of a role member in authors list
    const authors = props.authors
      ? Array.isArray(props.authors) ? props.authors : [props.authors]
      : undefined
    const roleGroups = {}
    authors.forEach(author => {
      const role = !author.role
        ? 'author'
        : author.role
      if (!roleGroups[role]) roleGroups[role] = []
      roleGroups[role].push(author)
    })
    // For each role list, convert each author object into
    // a text with a link and a comma before it if needed
    const roleGroupsJointWithCommas = {}
    for (let role in roleGroups) {
      roleGroupsJointWithCommas[role] = []
      roleGroups[role].forEach((author, i, src) => {
        const alphaNumRole = role.toLowerCase().replace(/[^a-z0-9]/g, '-')
        const isLast = (i === src.length - 1)
        const displayAuthor = author.link
          ? <span className={`${c}__person`} key={`${i}-${alphaNumRole}`}><a href={author.link}>{author.name}</a></span>
          : <span className={`${c}__person`} key={`${i}-${alphaNumRole}`}>{author.name}</span>
        const commaSeparator = <span className={`${c}__label`} key={`${i}-${alphaNumRole}-sep`}>, </span>
        const andSeparator = <span className={`${c}__label`} key={`${i}-${alphaNumRole}-sep`}>, et </span>
        if (i !== 0 && !isLast) roleGroupsJointWithCommas[role].push(commaSeparator, displayAuthor)
        else if (i !== 0 && isLast) roleGroupsJointWithCommas[role].push(andSeparator, displayAuthor)
        else roleGroupsJointWithCommas[role].push(displayAuthor)
      })
    }
    // Join all roles in a single line
    const finalRolesDisplay = []
    if (roleGroupsJointWithCommas.author) {
      finalRolesDisplay.push(
        <span className={`${c}__label`} key='label-0'>Par </span>,
        ...roleGroupsJointWithCommas.author
      )
      delete roleGroupsJointWithCommas.author
    }
    if (Object.keys(roleGroupsJointWithCommas).length) {
      finalRolesDisplay.push(<span className={`${c}__label`} key='label-1'> (</span>)
      for (let role in roleGroupsJointWithCommas) {
        const roleLine = roleGroupsJointWithCommas[role]
        finalRolesDisplay.push(
          <span className={`${c}__label`} key={`label-${role}`}>{role}&nbsp;:&nbsp;</span>,
          ...roleLine,
          <span className={`${c}__label`} key={`label-${role}-sep`}>, </span>
        )
      }
      finalRolesDisplay.pop()
      finalRolesDisplay.push(<span className={`${c}__label`} key='label-last'>)</span>)
    }
    // Convert timestamps into readable dates
    const displayPublishedOn = props.publishedOn
      ? moment(props.publishedOn).format('D MMMM YYYY à HH:MM')
      : undefined
    const displayUpdatedOn = props.updatedOn
      ? moment(props.updatedOn).format('D MMMM YYYY à HH:MM')
      : undefined
    // Gather all information to be displayed
    const fullDisplay = [...finalRolesDisplay]
    if (displayPublishedOn) fullDisplay.push(
      <span className={`${c}__label`} key='role-date-sep'> — </span>,
      <span className={`${c}__date`} key='publish-date'>{displayPublishedOn}</span>
    )
    if (displayPublishedOn && displayUpdatedOn) fullDisplay.push(
      <span className={`${c}__label`} key='update-label'> (modifié le </span>,
      <span className={`${c}__date`} key='update-date'>{displayUpdatedOn}</span>,
      <span className={`${c}__label`} key='update-label-end'>)</span>
    )

    /* Assign classes */
    const classes = [c]

    return <div className={classes.join(' ')}>
      <Annotation>{fullDisplay}</Annotation>
    </div>
  }
}
