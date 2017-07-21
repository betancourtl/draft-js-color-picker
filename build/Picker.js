'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SketchExample = function (_Component) {
  _inherits(SketchExample, _Component);

  function SketchExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SketchExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SketchExample.__proto__ || Object.getPrototypeOf(SketchExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayColorPicker: false,
      color: {
        r: '255',
        g: '255',
        b: '255',
        a: '255'
      }
    }, _this.handleClick = function () {
      _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
    }, _this.handleClose = function () {
      _this.setState({ displayColorPicker: false });
    }, _this.handleChange = function (color) {
      var _color$rgb = color.rgb,
          r = _color$rgb.r,
          g = _color$rgb.g,
          b = _color$rgb.b,
          a = _color$rgb.a;

      _this.props.toggleColor('rgba(' + r + ',' + g + ',' + b + ',' + a + ')');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SketchExample, [{
    key: 'render',
    value: function render() {
      var pickerStyles = {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: this.props.color || 'rgba(' + this.state.color.r + ', ' + this.state.color.g + ', ' + this.state.color.b + ', ' + this.state.color.a + ')'
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      };

      var picker = _react2.default.createElement(
        'div',
        { style: pickerStyles.popover },
        _react2.default.createElement('div', {
          style: pickerStyles.cover,
          onClick: this.handleClose
        }),
        _react2.default.createElement(_reactColor.SketchPicker, {
          color: this.props.color || this.state.color,
          onChange: this.handleChange,
          presetColors: this.props.presetColors
        })
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            style: pickerStyles.swatch,
            onClick: this.handleClick
          },
          _react2.default.createElement('div', { style: pickerStyles.color })
        ),
        this.state.displayColorPicker ? picker : null
      );
    }
  }]);

  return SketchExample;
}(_react.Component);

exports.default = SketchExample;