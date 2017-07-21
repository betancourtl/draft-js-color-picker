import React, { Component } from 'react';
import { Editor } from 'draft-js';
import Raw from 'draft-js-raw-content-state';
import { stateToHTML } from 'draft-js-export-html';
import ColorPicker, { colorPickerPlugin } from '../src';

// Add preset colors to the picker
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

// Initialize the contentState
class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: new Raw().addBlock('Hello World', 'header-two').toEditorState() };

    // Step 1: Create the functions to get and update the editorState
    this.updateEditorState = editorState => this.setState({ editorState });
    this.getEditorState = () => this.state.editorState;

    // Step 2: run the colorPickerPlugin function
    this.picker = colorPickerPlugin(this.updateEditorState, this.getEditorState);
  }

  render() {
    const { editorState } = this.state;

    // Optional: you can use an export the color styles if you plan to render html
    const inlineStyles = this.picker.exporter(editorState);
    const html = stateToHTML(this.state.editorState.getCurrentContent(), { inlineStyles });

    return (
      <div style={{ display: 'flex', padding: '15px' }}>
        <div style={{ flex: '1 0 25%' }}>

          {/* Step 4: pass the functions to the color picker */}
          <ColorPicker
            toggleColor={color => this.picker.addColor(color)}
            presetColors={presetColors}
            color={this.picker.currentColor(editorState)}
          />
          <button onClick={this.picker.removeColor}>clear</button>
        </div>

        <div style={{ flex: '1 0 25%' }}>
          <h2>Draft-JS Editor</h2>

          {/* Step 5 pass the customStyleFn */}
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
          <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
      </div>
    );
  }
}

export default RichEditor;
