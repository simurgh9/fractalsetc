class Control {
  constructor(app) {
    this.app = app;
  }

  sliderEventHandler = (event) => {
    let newDepth = Number(event.target.value);
    let state = this.app.model.updateFractal(null, null, null, newDepth);
    this.app.setState(state);
  }

  dropdownEventHandler = (event) => {
    let newName = event.target.value;
    let state = this.app.model.updateFractal(newName, null, null, null);
    this.app.setState(state);
  }

  onWindowResize = () => {
    let state = this.app.model.updateFractal(
      null,this.app.getWinWidth(), this.app.getWinHeight(), null);
    this.app.setState(state);
  }
}

export default Control;
