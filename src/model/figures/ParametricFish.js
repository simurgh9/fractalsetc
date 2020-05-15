import AbstractFigure from './AbstractFigure.js';
import { LinkedList, Point } from '../data_structures/DataStructureIndex.js';


const cos = Math.cos;
const sin = Math.sin;
const pow = Math.pow;
const PI = Math.PI;
const DEPTH = pow(10, 4);
const COLOUR_DICT = {
  0: '#EFDBCB',
  0.5: '#4BB4DE',
  1: '#FCD593',
  1.5: '#345DA7'
};


class ParametricFish extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, DEPTH, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let p, i, c;
    const T = this.linspace(-2 * PI, 2 * PI, DEPTH);
    for (i = 0; i < this.recursionDepth; i++) {
      [x, y] = this.parametricCurve(T.next().value, Math.min(w, h));
      for (c of [0, 0.5, 1, 1.5]) {
        p = new Point(x, y, 1, 1, null, false, this.colour(c, i));
        p.rotate(c * PI, [0, 0]);
        ls.add(p);
      }
    }
    return ls;
  }

  parametricCurve(t, scale) {
    const C = Math.round(0.25 * scale); // scaling factor
    return [C * pow(sin(-5 * t), 2) * pow(2, cos(cos(4.28 * 2.3 * t))),
    C * sin(sin(-5 * t)) * pow(cos(4.28 * 2.3 * t), 2)];
  }

  colour(angle, itr) {
    let a = Math.round((itr % 10 / 10) * 255).toString(16);
    a = a.length === 1 ? '0' + a : a;
    return COLOUR_DICT[angle] + a;
  }

  getTitle() {
    return 'Curve by LThMath 2';
  }
}

export default ParametricFish;
