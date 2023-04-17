// eslint-disable-next-line
import {Point} from '../data_structures/DataStructureIndex.js';


class AbstractFigure {
  constructor(width, height, maxDepth, origin, toCenterFractal = false) {
    if (this.constructor === AbstractFigure) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.maxDepth = maxDepth;
    this.width = width;
    this.height = height;
    this.origin = origin;
    this.toCenterFractal = toCenterFractal;
    this.wipeOutDepthToPointArray();
    this.recursionDepth = -1;
    this.setChildVarsBeforeSettingPoints();
    this.setDepthToDefault(); // initial depth
  }

  setChildVarsBeforeSettingPoints() {
    /**
     * Use this function to initialize any child instance variables
     * that are needed before setting points. This function is needed
     * since as soon as the super(...) in child's constructor is
     * called to call this class's constructor we see that the
     * following chain,
     *
     * this.setDepthToDefault()
     *   this.setRecursionDepth()
     *     this.setPoints()
     *       this.set()
     *
     * gets called to set points before any of the child instance
     * variables after the super(...) have a chance of being
     * initialised. However, this function is called before setting
     * any points therefore, any child instance variables set in this
     * function are available to that first call to this.set(...).
     */
    return;
  }
  
  setDepthToDefault() {
    this.setRecursionDepth(Math.round(this.maxDepth / 2));
  }

  setRecursionDepth(depth) {
    this.recursionDepth = depth;
    this.setPoints();
  }

  setDimensions(w, h) {
    this.width = w;
    this.height = h;
    this.wipeOutDepthToPointArray();
    this.setPoints();
  }

  setPoints() {
    if (this.pointsNeedBeSet()) {
      // console.log('I set '+ this.getTitle() + ' for ' + this.getRecursionDepth());
      this.depthToPoints[this.getRecursionDepth()] = this.set(
        this.origin[0], this.origin[1],
        this.width, this.height);
      if (this.toCenterFractal) {
        this.centerFractal();
      }
    }
  }

  wipeOutDepthToPointArray() {
    this.depthToPoints = new Array(this.maxDepth);
  }

  set(/* x, y, w, h, ls=new LinkedList(), r = 0 */) {
    throw new Error("Method 'set()' must be implemented.");
  }

  centerFractal() {
    let minX = Number.POSITIVE_INFINITY,
      minY = Number.POSITIVE_INFINITY,
      maxX = Number.NEGATIVE_INFINITY,
      maxY = Number.NEGATIVE_INFINITY;
    for (let p of this.getPoints()) {
      for (let vertex of p.getVertices()) {
        minX = vertex[0] < minX ? vertex[0] : minX;
        minY = vertex[1] < minY ? vertex[1] : minY;
        maxX = vertex[0] > maxX ? vertex[0] : maxX;
        maxY = vertex[1] > maxY ? vertex[1] : maxY;
      }
    }
    let midW = this.width / 2,
      midH = this.height / 2;
    let midX = (maxX - minX) / 2,
      midY = (maxY - minY) / 2;
    let a = midW - midX - minX,
      b = midH - midY - minY;
    // bounding box
    // let p = new Point(minX,
    //   minY,
    //   maxX - minX,
    //   maxY - minY,
    //   null, false);
    // this.getPoints().add(p);
    for (let p of this.getPoints()) {
      p.translate(a, b);
    }
  }

  pointsNeedBeSet() {
    return !this.depthToPoints[this.getRecursionDepth()];
  }

  getTitle() {
    throw new Error("Method 'getTitle()' must be implemented.");
  }

  getReactState() {
    return {
      title: this.getTitle(),
      width: this.getWidth(),
      height: this.getHeight(),
      points: this.getPoints(),
      recursionDepth: this.getRecursionDepth(),
      maxRecursionDepth: this.maxDepth,
    };
  }

  getPoints() {
    return this.depthToPoints[this.getRecursionDepth()];
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getRecursionDepth() {
    return this.recursionDepth;
  }

  *linspace(lower, upper, num_points = 10) {
    let step = (upper - lower) / (num_points - 1);
    for (let i = 0; i < num_points; i++) {
      yield (lower + (i * step));
    }
  }
}

export default AbstractFigure;
