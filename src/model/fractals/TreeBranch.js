import Point from './Point.js';
import LinkedList from './LinkedList.js';
import AbstractFractal from './AbstractFractal.js';

const BRANCHES = 3;
const MIN_ANGLE = 0;
const MAX_ANGLE = Math.PI/4;
const MIN_LENGTH = 0.30;
const MAX_LENGTH = 0.90;

class Vector {
  constructor(x, y, r, radians) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.radians = radians;
  }

  getEndPointX() {
    return this.x + this.r * Math.cos(this.radians);
  }

  getEndPointY() {
    return this.y + this.r * Math.sin(this.radians);
  }
}

class TreeBranch extends AbstractFractal {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 10, origin);
  }
  
  branch(v, N, ls) {
    if (N > 0) {
      let dir = Math.random() > 0.5 ? 1 : -1;
      let vertices = [[v.x, v.y], [v.getEndPointX(), v.getEndPointY()]];
      let p =  new Point(v.x, v.y, 0, 0, vertices, true, this.palette());
      ls.add(p);
      for (let i = 0; i < BRANCHES; i++) {
        let r = new Vector(v.x, v.y, v.r, v.radians);
        r.r = this.rand(v.r * MIN_LENGTH, v.r * MAX_LENGTH);
        r.x = r.getEndPointX();
        r.y = r.getEndPointY();
        r.radians += dir * this.rand(MIN_ANGLE, MAX_ANGLE);
        dir *= -1;
        this.branch(r, N - 1, ls);
      }
    }
  }
  
  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let seed = new Vector(x, y, 0.3*(Math.sqrt(w*w + h*h)), Math.PI/4);
    this.branch(seed, this.recursionDepth, ls);
    return ls;
  }

  rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  palette() {
    let palette = ['#77a37a', '#5f926a', '#587e60', '#485e52', '#3a4f3f',
                   '#77a37a', '#5f926a', '#587e60', '#485e52', '#3a4f3f',
                   '#77a37a', '#5f926a', '#587e60', '#485e52', '#3a4f3f',
                   '#603C14', '#9C2706', '#D45B12', '#F3BC2E', '#5F5426'];
    return palette[Math.round(this.rand(0, palette.length-1))];
  }
  
  getTitle() {
    return 'Tree Branch Fractal';
  }
}

export default TreeBranch;
