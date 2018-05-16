import React from 'react'
import Slider from 'react-slick'
import './lib/slick.min.css'
import './styles/style.css'

export default class SimpleDiaporama extends React.Component {
  render () {
    const style = { height: this.props.height }
    const imagesList = this.props.images.map((img, i) => (
      <div
        className='simple-diaporama__slide-container'
        key={i}>
        <div style={style}>
          <img
            src={img.url}
            alt={img.alt || ''} />
        </div>
      </div>
    ))

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true
    }

    return (
      <div className='simple-diaporama'>
        <Slider {...sliderSettings}>
          {imagesList}
        </Slider>
      </div>
    )
  }
}
