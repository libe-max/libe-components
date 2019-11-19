# Libé Components

## General purpose

This projects holds reusable UI components for [Libé Labo](https://www.liberation.fr/libe-labo-data-nouveaux-formats,100538) apps. This repo only takes care of the DOM and logical description of these components. For the styles, see [libe-static-ressources](https://github.com/libe-max/libe-static-ressources/blob/master/README.md).

~~See a live demo of all the components [here](https://www.liberation.fr/apps/static/demo)~~ (soon).

Home repo: https://github.com/libe-max/libe-components<br/>
NPM: https://www.npmjs.com/package/libe-components

## Technologies

The project uses [React](https://reactjs.org/). Components are transpiled via `@babel/plugin-transform-react-jsx`.

## Install, start, build & publish

#### Install

```bash
# Go to your favorite location
> cd /wherever/you/want/

# Create a place for your database to store data
> mkdir libe-database && mkdir libe-database/db

# Clone libe-components and its friends
> git clone https://github.com/libe-max/libe-components.git
> git clone https://github.com/libe-max/libe-static-ressources.git
> git clone https://github.com/libe-max/libe-data-server.git

# Install dependencies (libe-static-ressources has none)
> cd libe-data-server/ && npm i
> cd ../libe-components/ && npm i

# It's all good!
```

#### Install as a dependency

```bash
# Go to your project
> cd /wherever/your/project/is
> npm i libe-components
```

#### Start

```bash
# Start the libe-static-ressources (simple HTTP python server on port 3003)
> cd /wherever/you/installed/libe-static-ressources/ && npm start

# Run a MongoDB instance on default port (27017)
> mongod --dbpath ../libe-database/db/

# Start the libe-data-server (Nodejs/Expressjs server on port 3004)
> cd ../libe-data-server/ && npm start

# Start libe-components (React app with hot reloading on port 3002)
> cd ../libe-apps-template/ && npm start
```

#### Build

```bash
> cd /wherever/you/installed/libe-components/

# Please, do lint.
> npm run standard-fix

# Build
> npm run build
```

#### Publish

```bash
> cd /wherever/you/installed/libe-components/

# Commit and push everything
> git add *
> git commit -m "some lowercase descriptive action text"
> git push origin master

# Update "version" field in package.json, according to the [semantic versionning](https://semver.org/) method.
> nano package.json

# Install dependencies again in order to update package-lock.json
> npm i

# Commit & push version change
> git add *
> git commit -m "v{MAJOR}.{MINOR}.{PATCH}"
> git push origin master

# Publish to NPM
# (no need to build: npm run build is specified as a prepublish script in package.json)
> npm publish
```



## Contents

```
libe-components
├── package.json
├── package-lock.json
├── build.sh
├── .babelrc
├── .npmignore
├── node_modules/
├── public/
    ├── index.html
    ├── ...
├── lib/
├── src/
    ├── index.js
    ├── components/
```



| Path                   | Purpose                                                      |
| ---------------------- | ------------------------------------------------------------ |
| `/package.json`        | The ID card of the project                                   |
| `/package-lock.json`   | Don't touch this                                             |
| `/build.sh`            | The script executed in order to make a NPM ready components library |
| `/.babelrc`            | Config file for Babel                                        |
| `/.npmignore`          | As a NPM module, no need for the **`/public/`** and the **`/src/`** directories, since `/build.sh`  transpiles components in **`/lib/`** |
| **`/node_modules/`**   | Where the dependencies of the project are                    |
| **`/public/`**         | **Home of the static files**                                 |
| `/public/index.html`   | The template page where the demo of all components is displayed |
| `/public/*`            | Static ressources for the components demo page               |
| **`/lib/`**            | Build directory. Contains a transpiled version of everything in **`/src/components/`** |
| **`/src/`**            | Home of the source files                                     |
| `/src/index.js`        | A page displaying all components in **`/src/components/`**. Not exported in **`/lib/`** |
| **`/src/components/`** | All the standalone components                                |



## Component file template

```react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
 *   Example component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Short description of how this works
 *
 *   PROPS
 *   list, of, props
 *
 */

export default class Example extends Component {
  /* * * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.c = 'lblb-example'
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
    return <div className={classes.join(' ')}>
      Example component
    </div>
  }
}

/* * * * * Prop types * * * * */
Example.propTypes = {}
Example.defaultProps = {}

```



## Auteurs

- **Maxime Fabas** - _Rédaction_ - [maximefabas.github.io](https://maximefabas.github.io)

___
![Logo Libération](https://www.liberation.fr/apps/static/assets/liberation-logo_raster_64.png)       ![Logo Libé labo](https://www.liberation.fr/apps/static/assets/libe-labo-logo_raster_64.png)



