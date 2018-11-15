var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Slider from 'react-slick';
import './lib/slick.min.css';
import './styles/style.css';

var SimpleDiaporama = function (_React$Component) {
  _inherits(SimpleDiaporama, _React$Component);

  function SimpleDiaporama() {
    _classCallCheck(this, SimpleDiaporama);

    return _possibleConstructorReturn(this, (SimpleDiaporama.__proto__ || Object.getPrototypeOf(SimpleDiaporama)).apply(this, arguments));
  }

  _createClass(SimpleDiaporama, [{
    key: 'render',
    value: function render() {
      var style = { height: this.props.height || 400 };
      var imagesList = this.props.images || [];
      var images = imagesList.map(function (img, i) {
        return React.createElement(
          'div',
          { className: 'simple-diaporama__slide-container', key: i },
          React.createElement(
            'div',
            { style: style },
            React.createElement('img', { src: img.url, alt: img.alt || '' })
          )
        );
      });
      var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      };
      return React.createElement(
        'div',
        { className: 'simple-diaporama' },
        React.createElement(
          Slider,
          sliderSettings,
          images
        )
      );
    }
  }]);

  return SimpleDiaporama;
}(React.Component);

export default SimpleDiaporama;