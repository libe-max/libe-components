var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

import { SimpleDiaporama } from './components';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var simpleDiaporamaProps = {
        height: 500,
        images: [{ alt: '', url: 'http://md0.libe.com/photo/1122002-tolbiac.jpg?modified_at=1526474149' }, { alt: '', url: 'http://md0.libe.com/photo/1122000-tolbiac.jpg?modified_at=1526474062' }, { alt: '', url: 'http://md0.libe.com/photo/1121994-tolbiac.jpg?modified_at=1526473849' }, { alt: '', url: 'http://md0.libe.com/photo/1121995-tolbiac.jpg?modified_at=1526473906' }, { alt: '', url: 'http://md0.libe.com/photo/1121996-tolbiac.jpg?modified_at=1526473942' }, { alt: '', url: 'http://md0.libe.com/photo/1121997-tolbiac.jpg?modified_at=1526473954' }, { alt: '', url: 'http://md0.libe.com/photo/1121998-tolbiac.jpg?modified_at=1526473983' }, { alt: '', url: 'http://md0.libe.com/photo/1121999-tolbiac.jpg?modified_at=1526474024' }, { alt: '', url: 'http://md0.libe.com/photo/1122001-tolbiac.jpg?modified_at=1526474117' }, { alt: '', url: 'http://md0.libe.com/photo/1122003-tolbiac.jpg?modified_at=1526474177' }]
      };
      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          'h1',
          null,
          'Lib\xE9 components'
        ),
        React.createElement(
          'p',
          null,
          'A presentation of individual components that can be used inside any format for Lib\xE9ration.'
        ),
        React.createElement(
          'h3',
          null,
          'Simple diaporama'
        ),
        React.createElement(SimpleDiaporama, simpleDiaporamaProps)
      );
    }
  }]);

  return App;
}(React.Component);

// Rendering app ----------


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();