import React, { Component } from 'react';
import { Editor, convertToRaw } from 'draft-js';
import Raw from 'draft-js-raw-content-state';
import { stateToHTML } from 'draft-js-export-html';
import ColorPicker, { colorPickerPlugin } from '../src';

const presetColors = [
  '#ff00aa',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];

const initialEditorState = new Raw()
  .addBlock(`Hello World`)
  .toEditorState();

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: initialEditorState };
    this.updateEditorState = editorState => this.setState({ editorState });
    this.getEditorState = () => this.state.editorState;
    this.picker = colorPickerPlugin(this.updateEditorState, this.getEditorState);
  }

  addColor = color => this.picker.addColor(color);
  removeColor = () => this.picker.removeColor;

  render() {
    const { editorState } = this.state;
    const inlineStyles = this.picker.exporter(editorState);
    const html = stateToHTML(this.state.editorState.getCurrentContent(), { inlineStyles });
    return (
      <div style={{ display: 'flex', padding: '15px' }}>
        <div style={{ flex: '1 0 25%' }}>
          <ColorPicker
            toggleColor={this.addColor}
            presetColors={presetColors}
            color={this.picker.currentColor(editorState)}
          />
          <button onClick={this.picker.removeColor}>clear</button>
        </div>
        <div style={{ flex: '1 0 25%' }}>
          <h2>Draft-JS Editor</h2>
          <Editor
            customStyleFn={this.picker.customStyleFn}
            editorState={editorState}
            onChange={this.updateEditorState}
            placeholder="Tell a story..."
            readOnly={this.state.readOnly}
          />
        </div>
        <div style={{ flex: '1 0 25%' }}>
          <h2>Exported HTML</h2>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div style={{ flex: '1 0 25%' }}>
          <h2>ContentState</h2>
          <div>
            <pre>
              {JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()), null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default RichEditor;
