import React, { Component } from 'react';
import Model from '../model/Model.js';
import Control from '../control/Control.js';
import { FractalPane, Header } from './components/ComponentIndex.js';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.MARGIN = 0;
    this.control = new Control(this);
    this.model = new Model(this.getWinWidth(), this.getWinHeight());
    this.state = this.model.getReactState();
    window.addEventListener("resize", this.control.onWindowResize);
  }

  getWinWidth() {
    return window.innerWidth;
  }

  getWinHeight() {
    return window.innerHeight;
  }
  
  render() {
    return (
      <div className="App">
        <Header
          sliderEventHandler={this.control.sliderEventHandler}
          sliderInitialValue={this.state.recursionDepth}
          sliderMaxValue={this.state.maxRecursionDepth}
          dropdownEventHandler={this.control.dropdownEventHandler}
          dropdownOptions={this.model.getOptions()}
          title={this.state.title}
        />
        <FractalPane fractal={this.state} />
      </div>
    );
  }
}

export default App;
