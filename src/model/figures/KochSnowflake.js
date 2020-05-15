import AbstractFigure from './AbstractFigure.js';
import {LinkedList, Vector} from '../data_structures/DataStructureIndex.js';


class KochSnowflake extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 6, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let l = Math.min(w, h);
    // left
    let seed = new Vector([x + l / 2, y + l / 10], l * (3 / 4), Math.PI * (2 / 3));
    ls = this.fractal(seed, ls, this.recursionDepth);
    // right
    seed = new Vector([x + l * (35 / 40), y + l * (3 / 4)], l * (3 / 4), Math.PI * (-2 / 3));
    ls = this.fractal(seed, ls, this.recursionDepth);
    // bottom
    seed = new Vector([x + l * (5 / 40), y + l * (3 / 4)], l * (3 / 4), 0);
    ls = this.fractal(seed, ls, this.recursionDepth);
    return ls;
  }

  fractal(v, ls, recurLeft) {
    if (recurLeft === 0) {
      return v.addVector(ls);  // Draw the current vector
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
