import React from 'react'
import Slider from 'react-slick'
import './lib/slick.min.css'
import './styles/style.css'

export default class SimpleDiaporama extends React.Component {
  render() {
    const style = { height: this.props.height || 400 }
    const imagesList = this.props.images || []
    const images = imagesList.map((img, i) => (
      <div className='simple-diaporama__slide-container' key={i}>
        <div style={style}>
          <img src={img.url} alt={img.alt || ''} />
        </div>
      </div>
    ))
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true
    }
    return (
      <div className='simple-diaporama'>
        <Slider {...sliderSettings}>
          {images}
        </Slider>
      </div>
    )
  }
}
