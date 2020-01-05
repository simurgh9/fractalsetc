import * as Fractals from './fractals/FractalIndex.js';

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
    for (let name in Fractals) {
      let currFrac = new Fractals[name](0, 0, 0, [0, 0]);
      this.options[name] = currFrac.getTitle();
    }
    this.setNameAndFractal(Object.keys(this.options)[0]);
  }

  setNameAndFractal(name) {
    this.name = name;
    this.fractal = new Fractals[
      this.name](
        this.width,
        this.height,
        this.DEFAULT_MAX_DEPTH,
        this.origin);
    this.recursionDepth = this.fractal.getRecursionDepth();
  }
  
  setRecursionDepth(depth) {
    this.recursionDepth = depth;
    this.getFractal().setRecursionDepth(this.recursionDepth);
  }

  getReactState() {
    return this.getFractal().getReactState();
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

  getFractal() {
    return this.fractal;
  }

  setDimensions(w, h) {
    this.width = w;
    this.height = h;
    this.getFractal().setDimensions(this.width, this.height);
  }

  updateFractal(name, width, height, depth) {
    this.width  = width  ? width  : this.width;
    this.height = height ? height : this.height;
    
    if(name !== null && this.getName() !== name) {
      this.setNameAndFractal(name);
    } else if (depth !== null && this.getRecursionDepth() !== depth) {
      this.setRecursionDepth(depth);
    } else {
      this.setDimensions(this.width, this.height);
    }
    return this.getReactState();
  }
}

export default Model;
