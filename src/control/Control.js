class Control {
  constructor(app) {
    this.app = app;
  }

  sliderEventHandler = (event) => {
    let newDepth = Number(event.target.value);
    let state = this.app.model.updateFigure(null, null, null, newDepth);
    this.app.setState(state);
  };

  dropdownEventHandler = (event) => {
    let newName = event.target.value;
    let state = this.app.model.updateFigure(newName, null, null, null);
    this.app.setState(state);
  };

  onWindowResize = () => {
    let state = this.app.model.updateFigure(
      null,
      this.app.getCanvasWidth(),
      this.app.getCanvasHeight(),
      null
    );
    this.app.setState(state);
  };
}

export default Control;
