import AbstractFigure from './AbstractFigure.js';
import {LinkedList, Vector} from '../data_structures/DataStructureIndex.js';


class KochSnowflake extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 6, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let l = Math.min(w, h);
    // left
    let seed = new Vector(l * (3 / 4), Math.PI * (2 / 3), [x + l / 2, y + l / 10]);
    ls = this.fractal(seed, ls, this.recursionDepth);
    // right
    seed = new Vector(l * (3 / 4), Math.PI * (-2 / 3), [x + l * (35 / 40), y + l * (3 / 4)]);
    ls = this.fractal(seed, ls, this.recursionDepth);
    // bottom
    seed = new Vector(l * (3 / 4), 0, [x + l * (5 / 40), y + l * (3 / 4)]);
    ls = this.fractal(seed, ls, this.recursionDepth);
    return ls;
  }

  fractal(v, ls, recurLeft) {
    if (recurLeft === 0) {
      ls.add(v.toPoint(true, '#fffafa', null, 2));
      return ls;
    } else {
      let t1 = new Vector(v.l / 3, v.radians, [...v.origin]);
      let t2 = new Vector(v.l / 3, v.radians + Math.PI / 3, t1.cartesian());
      let t3 = new Vector(v.l / 3, v.radians - Math.PI / 3, t2.cartesian());
      let t4 = new Vector(v.l / 3, v.radians, t3.cartesian());
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
