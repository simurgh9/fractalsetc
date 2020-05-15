import AbstractFigure from './AbstractFigure.js';
import { LinkedList, Point } from '../data_structures/DataStructureIndex.js';


// const cos = Math.cos;
const sin = Math.sin;
const pow = Math.pow;
const PI = Math.PI;
const DEPTH = pow(10, 4);
const COLOUR_DICT = {
  0: '#CC2A49',
  0.333: '#F99E4C',
  0.666: '#582841'
};

class ParametricFish extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, DEPTH, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let p, i, c;
    const T = this.linspace(-13, 13, this.recursionDepth);
    for (i = 0; i < this.recursionDepth; i++) {
      [x, y] = this.parametricCurve(T.next().value, Math.min(w, h));
      for (c of [0, 0.333, 0.666]) {
        p = new Point(x, y, 1, 1, null, false, COLOUR_DICT[c]);
        p.rotate(c * PI, [0, 0]);
        ls.add(p);
      }
    }
    return ls;
  }

  parametricCurve(t, scale) {
    const C = Math.round(0.35*scale); // scaling factor
    return [C * (sin(1.36 * t) / pow((1 + pow(sin(10.8*t), 2)),2)),
            C * pow(sin(1.36 * t), 3)];
  }

  getTitle() {
    return 'Curve by LThMath 1';
  }
}

export default ParametricFish;
