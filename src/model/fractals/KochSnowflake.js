import Point from './Point.js';
import LinkedList from './LinkedList.js';
import AbstractFractal from './AbstractFractal.js';

class Vector {
  constructor(start, l, radians) {
    this.start = start;
    this.l = l;
    this.radians = radians;
    this.end = [this.start[0] + l * Math.cos(radians),
    this.start[1] + l * Math.sin(radians)];
  }
  addVector(ls) {
    let vertices = [this.start, this.end];
    debugger;
    ls.add(new Point(this.start[0], this.start[1], 0, 0, vertices, true, '#fffafa', null, 2));
    return ls;
  }
}

class KochSnowflake extends AbstractFractal {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 7, origin);
  }
  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let l = Math.min(w, h);
    let seed = new Vector([x + l / 2, y + l / 10], l * (3 / 4), Math.PI * (2 / 3));
    ls = this.fractal(seed, ls, this.recursionDepth);
    seed = new Vector([x + l * (35 / 40), y + l * (3 / 4)], l * (3 / 4), Math.PI * (-2 / 3));
    ls = this.fractal(seed, ls, this.recursionDepth);
    seed = new Vector([x + l * (5 / 40), y + l * (3 / 4)], l * (3 / 4), 0);
    return this.fractal(seed, ls, this.recursionDepth);
  }

  fractal(v, ls, recurLeft) {
    if (recurLeft === 0) {
      return v.addVector(ls);  //Draw the current vector
    } else {
      let t1 = new Vector([v.start[0], v.start[1]], v.l / 3, v.radians);
      let t2 = new Vector([t1.end[0], t1.end[1]], v.l / 3, v.radians + Math.PI / 3);
      let t3 = new Vector([t2.end[0], t2.end[1]], v.l / 3, v.radians - Math.PI / 3);
      let t4 = new Vector([t3.end[0], t3.end[1]], v.l / 3, v.radians);
      ls = this.fractal(t1, ls, recurLeft - 1);
      ls = this.fractal(t2, ls, recurLeft - 1);
      ls = this.fractal(t3, ls, recurLeft - 1);
      return this.fractal(t4, ls, recurLeft - 1);
    }
  }

  getTitle() {
    return 'Koch Snowflake';
  }
}

export default KochSnowflake;
