import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class SketchExample extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '255',
      g: '255',
      b: '255',
      a: '255',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    const { r, g, b, a } = color.rgb;
    this.props.toggleColor(`rgba(${r},${g},${b},${a})`);
  };

  render() {
    const pickerStyles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: this.props.color || `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    };

    const picker = (
      <div style={pickerStyles.popover}>
        <div
          style={pickerStyles.cover}
          onClick={this.handleClose}
        />
        <SketchPicker
          color={this.props.color || this.state.color}
          onChange={this.handleChange}
          presetColors={this.props.presetColors}
        />
      </div>
    );

    return (
      <div>
        <div
          style={pickerStyles.swatch}
          onClick={this.handleClick}
        >
          <div style={pickerStyles.color}/>
        </div>
        { this.state.displayColorPicker ? picker : null }
      </div>
    );
  }
}

export default SketchExample;