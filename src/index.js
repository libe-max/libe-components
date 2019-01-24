import React from 'react'
import ReactDOM from 'react-dom'

import PageTitle from './components/text-levels/PageTitle'
import InterTitle from './components/text-levels/InterTitle'
import Overhead from './components/text-levels/Overhead'
import Hat from './components/text-levels/Hat'
import SectionTitle from './components/text-levels/SectionTitle'
import BlockTitle from './components/text-levels/BlockTitle'
import ParagraphTitle from './components/text-levels/ParagraphTitle'
import Paragraph from './components/text-levels/Paragraph'
import Slug from './components/text-levels/Slug'
import AnnotationTitle from './components/text-levels/AnnotationTitle'
import Annotation from './components/text-levels/Annotation'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      textLevelsSize: { regular: true }
    }
  }

  render () {
    const { state } = this
    const { textLevelsSize: txtLvl } = state

    return (
      <div className='lblb-components'>
        <h2 className='lblb-components__family-name'>Text levels</h2>

        {/* Size selector */}
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__props-editor'>
              <div className='lblb-components__component-variant'>Select a size</div>
              <select defaultValue='regular'
                style={{ fontFamily: 'Input Mono' }}
                onChange={e => this.setState({ textLevelsSize: { [e.target.value]: true } })}>
                <option value='small'>Small</option>
                <option value='regular'>Regular</option>
                <option value='big'>Big</option>
                <option value='huge'>Huge</option>
              </select>
            </div>
          </div>
        </div>

        {/* PageTitle */}
        <h3 className='lblb-components__component-name'>PageTitle</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <PageTitle {...txtLvl}>The quick brown fox</PageTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 1)
            </div>
          </div>
        </div>

        {/* InterTitle */}
        <h3 className='lblb-components__component-name'>InterTitle</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <InterTitle {...txtLvl}>The quick brown fox jumps over the lazy dog</InterTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 2)
            </div>
          </div>
        </div>

        {/* Overhead */}
        <h3 className='lblb-components__component-name'>Overhead</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <Overhead {...txtLvl}>The quick brown fox jumps over the lazy dog</Overhead>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text
            </div>
          </div>
        </div>

        {/* Hat */}
        <h3 className='lblb-components__component-name'>Hat</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <Hat {...txtLvl}>The quick brown fox jumps over the lazy dog. Voix ambiguë d'un coeur qui au zéphyr préfère les jattes de kiwis.</Hat>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text
            </div>
          </div>
        </div>

        {/* SectionTitle */}
        <h3 className='lblb-components__component-name'>SectionTitle</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <SectionTitle {...txtLvl}>The quick brown fox jumps over the lazy dog</SectionTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 3)
            </div>
          </div>
        </div>

        {/* BlockTitle */}
        <h3 className='lblb-components__component-name'>BlockTitle</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <BlockTitle {...txtLvl}>The quick brown fox</BlockTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 4)
            </div>
          </div>
        </div>

        {/* ParagraphTitle */}
        <h3 className='lblb-components__component-name'>ParagraphTitle</h3>
        <div className='lblb-components__comp-row'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component-variant'>!literary</div>
            <div className='lblb-components__component'>
              <ParagraphTitle {...txtLvl}>The quick brown fox jumps over the lazy dog</ParagraphTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 4)<br />
              literary: boolean
            </div>
          </div>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component-variant'>literary</div>
            <div className='lblb-components__component'>
              <ParagraphTitle {...txtLvl} literary>The quick brown fox jumps over the lazy dog</ParagraphTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 4)<br />
              literary: boolean
            </div>
          </div>
        </div>

        {/* Paragraph */}
        <h3 className='lblb-components__component-name'>Paragraph</h3>
        <div className='lblb-components__comp-row'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component-variant'>!literary</div>
            <div className='lblb-components__component'>
              <Paragraph {...txtLvl}>Praesent ultrices et elit eu pharetra. Aliquam vehicula <a href="#">maximus mauris vel accumsan</a>. Cras accumsan quam rutrum, commodo nunc quis, laoreet mauris. Nam ipsum ipsum, lobortis et fermentum in, placerat ac ligula. Duis at luctus lorem. Suspendisse a eros neque. Sed maximus leo nec eros finibus faucibus. Vivamus hendrerit aliquet ex eget varius. Donec posuere massa magna, ut lobortis elit viverra quis. Maecenas gravida magna at vestibulum iaculis.</Paragraph>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component-variant'>literary</div>
            <div className='lblb-components__component'>
              <Paragraph {...txtLvl} literary>Praesent ultrices et elit eu pharetra. Aliquam vehicula <a href="#">maximus mauris vel accumsan</a>. Cras accumsan quam rutrum, commodo nunc quis, laoreet mauris. Nam ipsum ipsum, lobortis et fermentum in, placerat ac ligula. Duis at luctus lorem. Suspendisse a eros neque. Sed maximus leo nec eros finibus faucibus. Vivamus hendrerit aliquet ex eget varius. Donec posuere massa magna, ut lobortis elit viverra quis. Maecenas gravida magna at vestibulum iaculis.</Paragraph>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
        </div>

        {/* Slug */}
        <h3 className='lblb-components__component-name'>Slug</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <Slug {...txtLvl}>Handgloves</Slug>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text
            </div>
          </div>
        </div>

        {/* AnnotationTitle */}
        <h3 className='lblb-components__component-name'>AnnotationTitle</h3>
        <div className='lblb-components__comp-col'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component'>
              <AnnotationTitle {...txtLvl}>The quick brown fox</AnnotationTitle>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              level: number(1-6, default 5)
            </div>
          </div>
        </div>

        {/* Annotation */}
        <h3 className='lblb-components__component-name'>Annotation</h3>
        <div className='lblb-components__comp-row'>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component-variant'>!literary</div>
            <div className='lblb-components__component'>
              <Annotation {...txtLvl}>The quick brown fox jumps over <a href="#">the lazy dog.</a></Annotation>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
          <div className='lblb-components__comp-slot'>
            <div className='lblb-components__component-variant'>literary</div>
            <div className='lblb-components__component'>
              <Annotation {...txtLvl} literary>The quick brown fox jumps over <a href="#">the lazy dog.</a></Annotation>
            </div>
            <div className='lblb-components__component-props'>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
        </div>

      </div>
    )
  }
}

// Rendering app ----------
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
