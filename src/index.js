import React from 'react'
import ReactDOM from 'react-dom'

// Text levels
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

// Blocks
import Loader from './components/blocks/Loader'
import LoadingError from './components/blocks/LoadingError'
import LogoGlyph from './components/blocks/LogoGlyph'
import LibeLaboLogo from './components/blocks/LibeLaboLogo'
import ShareArticle from './components/blocks/ShareArticle'

class App extends React.Component {
  constructor () {
    super()
    this.c = 'lblb-components'
    this.state = {
      textLevelsSize: { regular: true }
    }
  }

  render () {
    const { state, c } = this
    const { textLevelsSize: txtLvl } = state

    return (
      <div className={`${c}`}>
        <h2 className={`${c}__family-name`}>Blocks</h2>

        {/* Loader */}
        <h3 className={`${c}__component-name`}>Loader</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <Loader />
            </div>
            <div className={`${c}__component-props`}>
              - none -
            </div>
          </div>
        </div>

        {/* Loading error */}
        <h3 className={`${c}__component-name`}>LoadingError</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <LoadingError />
            </div>
            <div className={`${c}__component-props`}>
              - none -
            </div>
          </div>
        </div>

        {/* Logo glyph */}
        <h3 className={`${c}__component-name`}>LogoGlyph</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <LogoGlyph />
            </div>
            <div className={`${c}__component-props`}>
              - none -
            </div>
          </div>
        </div>

        {/* Libe Labo logo */}
        <h3 className={`${c}__component-name`}>LibeLaboLogo</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <LibeLaboLogo />
            </div>
            <div className={`${c}__component-props`}>
              - none -
            </div>
          </div>
        </div>

        {/* Share article */}
        <h3 className={`${c}__component-name`}>ShareArticle</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!short, !iconsOnly</div>
            <div className={`${c}__component`}>
              <ShareArticle />
            </div>
            <div className={`${c}__component-props`}>
              short, iconsOnly, url, tweet
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>short, !iconsOnly</div>
            <div className={`${c}__component`}>
              <ShareArticle short />
            </div>
            <div className={`${c}__component-props`}>
              short, iconsOnly, url, tweet
            </div>
          </div>
        </div>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!short, iconsOnly</div>
            <div className={`${c}__component`}>
              <ShareArticle iconsOnly />
            </div>
            <div className={`${c}__component-props`}>
              short, iconsOnly, url, tweet
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>short, iconsOnly</div>
            <div className={`${c}__component`}>
              <ShareArticle short iconsOnly />
            </div>
            <div className={`${c}__component-props`}>
              short, iconsOnly, url, tweet
            </div>
          </div>
        </div>

        <h2 className={`${c}__family-name`}>Text levels</h2>

        {/* Size selector */}
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__props-editor`}>
              <div className={`${c}__component-variant`}>Select a size</div>
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
        <h3 className={`${c}__component-name`}>PageTitle</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <PageTitle {...txtLvl}>The quick brown fox</PageTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 1)
            </div>
          </div>
        </div>

        {/* InterTitle */}
        <h3 className={`${c}__component-name`}>InterTitle</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <InterTitle {...txtLvl}>The quick brown fox jumps over the lazy dog</InterTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 2)
            </div>
          </div>
        </div>

        {/* Overhead */}
        <h3 className={`${c}__component-name`}>Overhead</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <Overhead {...txtLvl}>The quick brown fox jumps over the lazy dog</Overhead>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text
            </div>
          </div>
        </div>

        {/* Hat */}
        <h3 className={`${c}__component-name`}>Hat</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <Hat {...txtLvl}>The quick brown fox jumps over the lazy dog. Voix ambiguë d'un coeur qui au zéphyr préfère les jattes de kiwis.</Hat>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text
            </div>
          </div>
        </div>

        {/* SectionTitle */}
        <h3 className={`${c}__component-name`}>SectionTitle</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <SectionTitle {...txtLvl}>The quick brown fox jumps over the lazy dog</SectionTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 3)
            </div>
          </div>
        </div>

        {/* BlockTitle */}
        <h3 className={`${c}__component-name`}>BlockTitle</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <BlockTitle {...txtLvl}>The quick brown fox</BlockTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 4)
            </div>
          </div>
        </div>

        {/* ParagraphTitle */}
        <h3 className={`${c}__component-name`}>ParagraphTitle</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!literary</div>
            <div className={`${c}__component`}>
              <ParagraphTitle {...txtLvl}>The quick brown fox jumps over the lazy dog</ParagraphTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 4)<br />
              literary: boolean
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>literary</div>
            <div className={`${c}__component`}>
              <ParagraphTitle {...txtLvl} literary>The quick brown fox jumps over the lazy dog</ParagraphTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 4)<br />
              literary: boolean
            </div>
          </div>
        </div>

        {/* Paragraph */}
        <h3 className={`${c}__component-name`}>Paragraph</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!literary</div>
            <div className={`${c}__component`}>
              <Paragraph {...txtLvl}>Praesent ultrices et elit eu pharetra. Aliquam vehicula <a href='#'>maximus mauris vel accumsan</a>. Cras accumsan quam rutrum, commodo nunc quis, laoreet mauris. Nam ipsum ipsum, lobortis et fermentum in, placerat ac ligula. Duis at luctus lorem. Suspendisse a eros neque. Sed maximus leo nec eros finibus faucibus. Vivamus hendrerit aliquet ex eget varius. Donec posuere massa magna, ut lobortis elit viverra quis. Maecenas gravida magna at vestibulum iaculis.</Paragraph>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>literary</div>
            <div className={`${c}__component`}>
              <Paragraph {...txtLvl} literary>Praesent ultrices et elit eu pharetra. Aliquam vehicula <a href='#'>maximus mauris vel accumsan</a>. Cras accumsan quam rutrum, commodo nunc quis, laoreet mauris. Nam ipsum ipsum, lobortis et fermentum in, placerat ac ligula. Duis at luctus lorem. Suspendisse a eros neque. Sed maximus leo nec eros finibus faucibus. Vivamus hendrerit aliquet ex eget varius. Donec posuere massa magna, ut lobortis elit viverra quis. Maecenas gravida magna at vestibulum iaculis.</Paragraph>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
        </div>

        {/* Slug */}
        <h3 className={`${c}__component-name`}>Slug</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <Slug {...txtLvl}>Handgloves</Slug>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text
            </div>
          </div>
        </div>

        {/* AnnotationTitle */}
        <h3 className={`${c}__component-name`}>AnnotationTitle</h3>
        <div className={`${c}__comp-col`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <AnnotationTitle {...txtLvl}>The quick brown fox</AnnotationTitle>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              level: number(1-6, default 5)
            </div>
          </div>
        </div>

        {/* Annotation */}
        <h3 className={`${c}__component-name`}>Annotation</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!literary</div>
            <div className={`${c}__component`}>
              <Annotation {...txtLvl}>The quick brown fox jumps over <a href='#'>the lazy dog.</a></Annotation>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text<br />
              literary: boolean
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>literary</div>
            <div className={`${c}__component`}>
              <Annotation {...txtLvl} literary>The quick brown fox jumps over <a href='#'>the lazy dog.</a></Annotation>
            </div>
            <div className={`${c}__component-props`}>
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
