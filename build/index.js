'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorPickerPlugin = undefined;

var _draftJsCustomStyles = require('draft-js-custom-styles');

var _draftJsCustomStyles2 = _interopRequireDefault(_draftJsCustomStyles);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createStyles = (0, _draftJsCustomStyles2.default)(['color'], 'CUSTOM_'),
    styles = _createStyles.styles,
    customStyleFn = _createStyles.customStyleFn,
    exporter = _createStyles.exporter;

var addColor = function addColor(updateEditorState, getEditorState) {
  return function (color) {
    return updateEditorState(styles.color.add(getEditorState(), color));
  };
};

var removeColor = function removeColor(updateEditorState, getEditorState) {
  return function () {
    return updateEditorState(styles.color.remove(getEditorState()));
  };
};

var currentColor = function currentColor(getEditorState) {
  return function () {
    return styles.color.current(getEditorState());
  };
};

var colorPickerPlugin = exports.colorPickerPlugin = function colorPickerPlugin(updateEditorState, getEditorState) {
  return {
    addColor: addColor(updateEditorState, getEditorState),
    removeColor: removeColor(updateEditorState, getEditorState),
    currentColor: currentColor(getEditorState),
    customStyleFn: customStyleFn,
    exporter: exporter
  };
};

exports.default = _Picker2.default;