import React, { Component, Fragment } from 'react';
import Model from '../model/Model.js';
import Control from '../control/Control.js';
import { FigurePane, Header } from './components/ComponentIndex.js';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.control = new Control(this);
    this.model = new Model(0, 0);
    this.state = this.model.getReactState();
    window.addEventListener('resize', this.control.onWindowResize);
  }

  getCanvasWidth() {
    let main = document.getElementsByTagName('canvas')[0];
    return main.getBoundingClientRect().width;
  }

  getCanvasHeight() {
    let main = document.getElementsByTagName('canvas')[0];
    return main.getBoundingClientRect().height;
  }

  componentDidMount() {
    let ob = new ResizeObserver(this.control.onWindowResize);
    ob.observe(document.getElementsByTagName('canvas')[0]);
    this.setState(
      this.model.updateFigure(
        null,
        this.getCanvasWidth(),
        this.getCanvasHeight(),
        null
      )
    );
  }

  render() { // https://stackoverflow.com/a/54666349/12035739
    return (
      <Fragment>
        <Header
          sliderEventHandler={this.control.sliderEventHandler}
          sliderInitialValue={this.state.recursionDepth}
          sliderMaxValue={this.state.maxRecursionDepth}
          dropdownEventHandler={this.control.dropdownEventHandler}
          dropdownOptions={this.model.getOptions()}
          title={this.state.title}
        />
        <main>
          <FigurePane figure={this.state} />
        </main>
      </Fragment>
    );
  }
}

export default App;
