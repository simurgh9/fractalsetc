import * as Fractals from './fractals/FractalIndex.js';

class Model {
  constructor(width, height,
              recursionDepth=-1,
              origin=[0, 0],
              name = null) {
    this.DEFAULT_DEPTH = 4;
    this.DEFAULT_FRACTAL_NAME = 'SierpinskiTri';
    
    if (recursionDepth < 0) {
      this.setDepthToDefault();
    } else {
      this.recursionDepth = recursionDepth;
    }

    this.width = width;
    this.height = height;
    this.origin = origin;
    this.fractal = null;

    if (!name) {
      this.setNameAndFractal(this.DEFAULT_FRACTAL_NAME);
    } else {
      this.setNameAndFractal(name);
    }
    
    this.options = {};
    this.setOptions();
  } // constructor ends here

  setOptions() {
    for (let name in Fractals) {
      let currFrac = new Fractals[name](0, 0, 0, [0, 0]);
      this.options[name] = currFrac.getTitle();
    }
  }

  setNameAndFractal(name) {
    this.name = name;
    this.fractal = new Fractals[
      this.name](
        this.width,
        this.height,
        this.recursionDepth,
        this.origin);
  }
  
  setDepthToDefault() {
    this.recursionDepth = this.DEFAULT_DEPTH;
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

    // console.log([name, width, height, depth]);
    
    if(name && this.getName() !== name) {
      this.setDepthToDefault();
      this.setNameAndFractal(name);
    } else if (depth && this.getRecursionDepth() !== depth) {
      this.setRecursionDepth(depth);
    } else {
      this.setDimensions(this.width, this.height);
    }
    return this.getReactState();
  }
}

export default Model;
