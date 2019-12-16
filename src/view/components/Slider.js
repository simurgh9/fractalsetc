import '../css/Slider.css';

import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return <input
             id='slider'
             type='range'
             min='0'
             max={this.props.sliderMaxValue.toString()}
             autoComplete='off'
             value={this.props.sliderInitialValue}
             onChange={this.props.eventHandler}
           />;
  }
}

export default Slider;

