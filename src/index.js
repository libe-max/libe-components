import React from 'react'
import ReactDOM from 'react-dom'

// Global information
import { staticsRootUrl } from './components/.globals'

// Primitives
import Svg from './components/primitives/Svg'

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
import ArticleMeta from './components/blocks/ArticleMeta'
import BottomNotes from './components/blocks/BottomNotes'
import ReadAlso from './components/blocks/ReadAlso'
import ShareArticle from './components/blocks/ShareArticle'
import CopyValue from './components/blocks/CopyValue'
import Photo from './components/blocks/Photo'
import RasterMap from './components/blocks/RasterMap'
import Tweet from './components/blocks/Tweet'
import Hero from './components/blocks/Hero'

// Layouts
import Grid from './components/layouts/Grid'
import Slot from './components/layouts/Slot'

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

        {/* * * * * * * * * * * * * * * * * * * * * * * * *
          *
          * ICONS
          *
          * * * * * * * * * * * * * * * * * * * * * * * * */}
        <h2 className={`${c}__family-name`}>Icons</h2>

        <div className={`${c}__comp-row ${c}__comp-row_icons`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/down-arrow-head-icon_24.svg`} />
              <div className={`${c}__component-props`}>down-arrow-head-icon_24</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/left-arrow-head-icon_24.svg`} />
              <div className={`${c}__component-props`}>left-arrow-head-icon_24</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/right-arrow-head-icon_24.svg`} />
              <div className={`${c}__component-props`}>right-arrow-head-icon_24</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/tilted-cross-icon_24.svg`} />
              <div className={`${c}__component-props`}>tilted-cross-icon_24</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/up-arrow-head-icon_24.svg`} />
              <div className={`${c}__component-props`}>up-arrow-head-icon_24</div>
            </div>

            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/e-mail-icon_32.svg`} />
              <div className={`${c}__component-props`}>e-mail-icon_32</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/facebook-logo-icon_32.svg`} />
              <div className={`${c}__component-props`}>facebook-logo-icon_32</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/printer-icon_32.svg`} />
              <div className={`${c}__component-props`}>printer-icon_32</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/twitter-logo-icon_32.svg`} />
              <div className={`${c}__component-props`}>twitter-logo-icon_32</div>
            </div>

            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/left-arrow-head-icon_40.svg`} />
              <div className={`${c}__component-props`}>left-arrow-head-icon_40</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/right-arrow-head-icon_40.svg`} />
              <div className={`${c}__component-props`}>right-arrow-head-icon_40</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/tilted-cross-icon_40.svg`} />
              <div className={`${c}__component-props`}>tilted-cross-icon_40</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/expand-arrows-icon_40.svg`} />
              <div className={`${c}__component-props`}>expand-arrows-icon_40</div>
            </div>

            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/magnifying-glass-icon_24.svg`} />
              <div className={`${c}__component-props`}>magnifying-glass-icon_24</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/magnifying-glass-icon_32.svg`} />
              <div className={`${c}__component-props`}>magnifying-glass-icon_32</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/magnifying-glass-icon_40.svg`} />
              <div className={`${c}__component-props`}>magnifying-glass-icon_40</div>
            </div>
            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/magnifying-glass-icon_64.svg`} />
              <div className={`${c}__component-props`}>magnifying-glass-icon_64</div>
            </div>


            <div className={`${c}__component`}>
              <Svg src={`${staticsRootUrl}/assets/loader-icon_64.svg`} />
              <div className={`${c}__component-props`}>loader-icon_64</div>
            </div>
          </div>
        </div>

        {/* * * * * * * * * * * * * * * * * * * * * * * * *
          *
          * BLOCKS
          *
          * * * * * * * * * * * * * * * * * * * * * * * * */}
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
              target
            </div>
          </div>
        </div>

        {/* Loading error */}
        <h3 className={`${c}__component-name`}>LoadingError</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>small</div>
            <div className={`${c}__component`}>
              <LoadingError small />
            </div>
            <div className={`${c}__component-props`}>
              small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>- none -</div>
            <div className={`${c}__component`}>
              <LoadingError />
            </div>
            <div className={`${c}__component-props`}>
              small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>big</div>
            <div className={`${c}__component`}>
              <LoadingError big />
            </div>
            <div className={`${c}__component-props`}>
              small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>huge</div>
            <div className={`${c}__component`}>
              <LoadingError huge />
            </div>
            <div className={`${c}__component-props`}>
              small, big, huge
            </div>
          </div>
        </div>

        {/* Copy value */}
        <h3 className={`${c}__component-name`}>CopyValue</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!hideField</div>
            <div className={`${c}__component`}>
              <CopyValue value='Une valeur à copier'
                label='Copier la valeur'
                successLabel='Valeur copiée !' />
            </div>
            <div className={`${c}__component-props`}>
              value, label, successLabel, hideField
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>hideField</div>
            <div className={`${c}__component`}>
              <CopyValue value='Une valeur à copier'
                label='Copier la valeur'
                successLabel='Valeur copiée !'
                hideField />
            </div>
            <div className={`${c}__component-props`}>
              value, label, successLabel, hideField
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
            <div className={`${c}__component-variant`}>!short, iconsOnly</div>
            <div className={`${c}__component`}>
              <ShareArticle iconsOnly />
            </div>
            <div className={`${c}__component-props`}>
              short, iconsOnly, url, tweet
            </div>
          </div>
        </div>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>short, !iconsOnly</div>
            <div className={`${c}__component`}>
              <ShareArticle short />
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

        {/* Article meta */}
        <h3 className={`${c}__component-name`}>ArticleMeta</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>small</div>
            <div className={`${c}__component`}>
              <ArticleMeta small
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>- none -</div>
            <div className={`${c}__component`}>
              <ArticleMeta
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>big</div>
            <div className={`${c}__component`}>
              <ArticleMeta big
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>huge</div>
            <div className={`${c}__component`}>
              <ArticleMeta huge
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
        </div>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>small, inline</div>
            <div className={`${c}__component`}>
              <ArticleMeta small
                inline
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>inline</div>
            <div className={`${c}__component`}>
              <ArticleMeta
                inline
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>big, inline</div>
            <div className={`${c}__component`}>
              <ArticleMeta big
                inline
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>huge, inline</div>
            <div className={`${c}__component`}>
              <ArticleMeta huge
                inline
                publishedOn={Date.now() - 2 ** 40}
                updatedOn={Date.now() - 2 ** 39}
                authors={[
                  { name: 'Marinette', link: '#' },
                  { name: 'Jeannot', link: '#' },
                  { name: 'Lou', link: '#' },
                  { name: 'Claude', link: '#', role: 'author' },
                  { name: 'Marius', link: '#', role: 'crédits photo' },
                  { name: 'Jacotte', link: '#', role: 'crédits photo' },
                  { name: 'Paulette', link: '#', role: 'production' },
                  { name: 'Bernard', link: '#', role: 'iconographie' }
                ]} />
            </div>
            <div className={`${c}__component-props`}>
              authors, publishedOn, updatedOn, small, big, huge, inline
            </div>
          </div>
        </div>

        {/* Bottom notes */}
        <h3 className={`${c}__component-name`}>BottomNotes</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>small</div>
            <div className={`${c}__component`}>
              <BottomNotes small
                activeNote={1}
                notes={[{
                  text: 'Note simple, lorem ipsum dolor sit amet',
                  id: 0
                }, {
                  component: <Annotation literary small>
                    Note JSX, belliquillam tortor ut sed
                  </Annotation>,
                  id: 1
                }, {}]} />
            </div>
            <div className={`${c}__component-props`}>
              notes, activeNote, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>- none -</div>
            <div className={`${c}__component`}>
              <BottomNotes
                activeNote={1}
                notes={[{
                  text: 'Note simple, lorem ipsum dolor sit amet',
                  id: 0
                }, {
                  component: <Annotation literary>
                    Note JSX, belliquillam tortor ut sed
                  </Annotation>,
                  id: 1
                }, {}]} />
            </div>
            <div className={`${c}__component-props`}>
              notes, activeNote, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>big</div>
            <div className={`${c}__component`}>
              <BottomNotes big
                activeNote={1}
                notes={[{
                  text: 'Note simple, lorem ipsum dolor sit amet',
                  id: 0
                }, {
                  component: <Annotation literary big>
                    Note JSX, belliquillam tortor ut sed
                  </Annotation>,
                  id: 1
                }, {}]} />
            </div>
            <div className={`${c}__component-props`}>
              notes, activeNote, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>huge</div>
            <div className={`${c}__component`}>
              <BottomNotes huge
                activeNote={1}
                notes={[{
                  text: 'Note simple, lorem ipsum dolor sit amet',
                  id: 0
                }, {
                  component: <Annotation literary huge>
                    Note JSX, belliquillam tortor ut sed
                  </Annotation>,
                  id: 1
                }, {}]} />
            </div>
            <div className={`${c}__component-props`}>
              notes, activeNote, small, big, huge
            </div>
          </div>
        </div>

        {/* Read also */}
        <h3 className={`${c}__component-name`}>ReadAlso</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>small</div>
            <div className={`${c}__component`}>
              <ReadAlso small title='Un titre sur lequel on peut cliquer hé hé' url='#' />
            </div>
            <div className={`${c}__component-props`}>
              title, url, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>- none -</div>
            <div className={`${c}__component`}>
              <ReadAlso title='Un titre sur lequel on peut cliquer hé hé' url='#' />
            </div>
            <div className={`${c}__component-props`}>
              title, url, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>big</div>
            <div className={`${c}__component`}>
              <ReadAlso big title='Un titre sur lequel on peut cliquer hé hé' url='#' />
            </div>
            <div className={`${c}__component-props`}>
              title, url, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>huge</div>
            <div className={`${c}__component`}>
              <ReadAlso huge title='Un titre sur lequel on peut cliquer hé hé' url='#' />
            </div>
            <div className={`${c}__component-props`}>
              title, url, small, big, huge
            </div>
          </div>
        </div>

        {/* Photo */}
        <h3 className={`${c}__component-name`}>Photo</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>small</div>
            <div className={`${c}__component`}>
              <Photo small
                src='https://i.pinimg.com/736x/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                hdSrc='https://i.pinimg.com/originals/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                description='Some photo description'
                credits='<a href="#">https://butdoesitfloat.com/</a>'
                expandable />
            </div>
            <div className={`${c}__component-props`}>
              src, hdSrc, description, credits, expandable, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!expandable</div>
            <div className={`${c}__component`}>
              <Photo
                src='https://i.pinimg.com/736x/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                hdSrc='https://i.pinimg.com/originals/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                description='Some photo description'
                credits='<a href="#">https://butdoesitfloat.com/</a>' />
            </div>
            <div className={`${c}__component-props`}>
              src, hdSrc, description, credits, expandable, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>big</div>
            <div className={`${c}__component`}>
              <Photo big
                src='https://i.pinimg.com/736x/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                hdSrc='https://i.pinimg.com/originals/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                description='Some photo description'
                credits='<a href="#">https://butdoesitfloat.com/</a>'
                expandable />
            </div>
            <div className={`${c}__component-props`}>
              src, hdSrc, description, credits, expandable, small, big, huge
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>huge</div>
            <div className={`${c}__component`}>
              <Photo huge
                src='https://i.pinimg.com/736x/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                hdSrc='https://i.pinimg.com/originals/e4/3c/bd/e43cbd380acf6d0df01b445c4be5b077.jpg'
                description='Some photo description'
                credits='<a href="#">https://butdoesitfloat.com/</a>'
                expandable />
            </div>
            <div className={`${c}__component-props`}>
              src, hdSrc, description, credits, expandable, small, big, huge
            </div>
          </div>
        </div>

        {/* Raster map */}
        <h3 className={`${c}__component-name`}>RasterMap</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`} style={{ height: 400 }}>
              <RasterMap ref={n => { this.rasterMap = n }} />
            </div>
            <div className={`${c}__component-props`}>
              children, center, zoom, tilesUrl, tilesAttribution, tilesOpacity,
              tilesZIndex, animate, bounds, doublcClickZoom, dragging, keyboard,
              maxBounds, onViewportChange, onViewportChanged, touchZoom,
              viewport
            </div>
            <div className={`${c}__component-props`}>
              METHODS: flyTo, zoomTo, flyAndZoomTo
            </div>
          </div>
        </div>

        {/* Tweet */}
        <h3 className={`${c}__component-name`}>Tweet</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component`}>
              <Tweet img='https://pbs.twimg.com/media/D3fDLpGW0AAOyBE.jpg' content={`<blockquote class="twitter-tweet" data-lang="en"><p lang="fr" dir="ltr">Le biau brevage qv’icelui ! Haravt ! <a href="https://t.co/AurkFPwDS3">pic.twitter.com/AurkFPwDS3</a></p>&mdash; Jehan le Brave (@Jehanlb) <a href="https://twitter.com/Jehanlb/status/1114574043183747072?ref_src=twsrc%5Etfw">April 6, 2019</a></blockquote>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`} />
            </div>
            <div className={`${c}__component-props`}>content, small, big, huge, literary, img, profilePic</div>
          </div>
        </div>

        {/* Hero */}
        <h3 className={`${c}__component-name`}>Hero</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot ${c}__comp-slot_wide`}>
            <div className={`${c}__component`}>
              <Hero parallax textShadow illustrationShadow
                height='50rem' bgPosition='top left' bgSize='contain' bgImage='https://static1.squarespace.com/static/59286b6a17bffc4f4514ab4e/59286ba0ff7c5099b2a0ec5c/592892bd46c3c4da9e2f9fce/1495831563674/Club21Matchbook-lg.jpg?format=2500w'
                illustration='./image-for-hero-component.png'>
                <Slug huge>Un p'tit slug</Slug><br /><br />
                <PageTitle>Oh les belles images !</PageTitle>
              </Hero>
            </div>
            <div className={`${c}__component-props`}>children, height, maxContentWidth, fullHeight, bgColor, bgImage, bgPosition, bgSize, parallax, illustration, illustrationPosition, illustrationShadow, textPosition, textShadow</div>
          </div>
        </div>

        {/* * * * * * * * * * * * * * * * * * * * * * * * *
          *
          * LAYOUTS
          *
          * * * * * * * * * * * * * * * * * * * * * * * * */}
        <h2 className={`${c}__family-name`}>Layouts</h2>

        {/* Grid & Slots */}
        <h3 className={`${c}__component-name`}>Grid & Slots</h3>
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot ${c}__comp-slot_wide`}>
            <div className={`${c}__component`}>
              <Grid width={[12, 7, 4]} gutterSize={[2, 1, 0.5]} noSideGutter showGrid>
                <Slot width={[6, null, null]}><Paragraph big>6</Paragraph></Slot>
                <Slot width={[6, null, null]}><Paragraph big>6</Paragraph></Slot>
                <Slot width={[5, null, null]}><Paragraph big>5</Paragraph></Slot>
                <Slot width={[7, null, null]}><Paragraph big>7</Paragraph></Slot>
                <Slot width={[4, null, null]}><Paragraph big>4</Paragraph></Slot>
                <Slot width={[8, null, null]}><Paragraph big>8</Paragraph></Slot>
                <Slot width={[3, null, null]}><Paragraph big>3</Paragraph></Slot>
                <Slot width={[9, null, null]}><Paragraph big>9</Paragraph></Slot>
                <Slot width={[2, null, null]}><Paragraph big>2</Paragraph></Slot>
                <Slot width={[10, null, null]}><Paragraph big>10</Paragraph></Slot>
                <Slot width={[1, null, null]}><Paragraph big>1</Paragraph></Slot>
                <Slot width={[11, null, null]}><Paragraph big>11</Paragraph></Slot>
                <Slot width={[12, null, null]}><Paragraph big>12</Paragraph></Slot>
                <Slot width={[null, 4, null]}><Paragraph big>4</Paragraph></Slot>
                <Slot width={[null, 3, null]}><Paragraph big>3</Paragraph></Slot>
                <Slot width={[null, 5, null]}><Paragraph big>5</Paragraph></Slot>
                <Slot width={[null, 2, null]}><Paragraph big>2</Paragraph></Slot>
                <Slot width={[null, 6, null]}><Paragraph big>6</Paragraph></Slot>
                <Slot width={[null, 1, null]}><Paragraph big>1</Paragraph></Slot>
                <Slot width={[null, 7, null]}><Paragraph big>7</Paragraph></Slot>
                <Slot width={[null, null, 2]}><Paragraph big>2</Paragraph></Slot>
                <Slot width={[null, null, 2]}><Paragraph big>2</Paragraph></Slot>
                <Slot width={[null, null, 1]}><Paragraph big>1</Paragraph></Slot>
                <Slot width={[null, null, 3]}><Paragraph big>3</Paragraph></Slot>
                <Slot width={[null, null, 4]}><Paragraph big>4</Paragraph></Slot>
                <Slot width={[4, 3, 3]} offset={[8, 4, 1]}><Paragraph big>Offset</Paragraph></Slot>
              </Grid>
            </div>
            <div className={`${c}__component-props`}>
              Grid: width, gutterSize, noSideGutter, showGrid, className<br />
              Slot: width, offset, className
            </div>
          </div>
        </div>

        {/* * * * * * * * * * * * * * * * * * * * * * * * *
          *
          * TEXT LEVELS
          *
          * * * * * * * * * * * * * * * * * * * * * * * * */}
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
        <div className={`${c}__comp-row`}>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>!noBg</div>
            <div className={`${c}__component`}>
              <Slug {...txtLvl}>Handgloves</Slug>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text
              noBg
            </div>
          </div>
          <div className={`${c}__comp-slot`}>
            <div className={`${c}__component-variant`}>noBg</div>
            <div className={`${c}__component`}>
              <Slug noBg {...txtLvl}>Handgloves</Slug>
            </div>
            <div className={`${c}__component-props`}>
              children: inline tags and text
              noBg
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
