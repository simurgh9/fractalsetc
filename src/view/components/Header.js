import '../css/Header.css';

import Slider from './Slider.js';
import Dropdown from './Dropdown.js';
import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <h1 id='header'> {
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={
            'https://duckduckgo.com/?q='
              + this.props.title
          }>
          {this.props.title}
        </a>
      }
        <Slider
          eventHandler={this.props.sliderEventHandler}
          sliderInitialValue={this.props.sliderInitialValue}
          sliderMaxValue={this.props.sliderMaxValue}
        />
        <Dropdown
          eventHandler={this.props.dropdownEventHandler}
          dropdownOptions={this.props.dropdownOptions}
        />
      </h1>
    );
  }
}
export default Header;
