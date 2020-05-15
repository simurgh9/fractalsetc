import * as Figures from './figures/FigureIndex.js';

class Model {
  constructor(width, height,
              origin=[0, 0]) {
    this.DEFAULT_MAX_DEPTH = 8;
    
    this.width = width;
    this.height = height;
    this.origin = origin;
    this.fractal = null;
    
    this.options = {};
    this.setOptions();
  } // constructor ends here

  setOptions() {
    for (let name in Figures) {
      let currFrac = new Figures[name](0, 0, 0, [0, 0]);
      this.options[name] = currFrac.getTitle();
    }
    this.setNameAndFigure(Object.keys(this.options)[0]);
  }

  setNameAndFigure(name) {
    this.name = name;
    this.fractal = new Figures[
      this.name](
        this.width,
        this.height,
        this.DEFAULT_MAX_DEPTH,
        this.origin);
    this.recursionDepth = this.fractal.getRecursionDepth();
  }
  
  setRecursionDepth(depth) {
    this.recursionDepth = depth;
    this.getFigure().setRecursionDepth(this.recursionDepth);
  }

  getReactState() {
    return this.getFigure().getReactState();
  }

  getName() {
    return this.name;
  }

  getRecursionDepth() {
    return this.recursionDepth;
  }
  
  getOptions() {
    return this.options;
  }

  getFigure() {
    return this.fractal;
  }

  setDimensions(w, h) {
    this.width = w;
    this.height = h;
    this.getFigure().setDimensions(this.width, this.height);
  }

  updateFigure(name, width, height, depth) {
    this.width  = width  ? width  : this.width;
    this.height = height ? height : this.height;
    
    if(name !== null && this.getName() !== name) {
      this.setNameAndFigure(name);
    } else if (depth !== null && this.getRecursionDepth() !== depth) {
      this.setRecursionDepth(depth);
    } else {
      this.setDimensions(this.width, this.height);
    }
    return this.getReactState();
  }
}

export default Model;
