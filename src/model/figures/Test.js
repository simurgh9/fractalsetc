import AbstractFigure from './AbstractFigure.js';
import {LinkedList, Point} from '../data_structures/DataStructureIndex.js';


const cos = Math.cos;
const sin = Math.sin;
const pow = Math.pow;
const PI = Math.PI;

class Test extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 10000, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let p, i, c;
    const T = this.linspace(-2 * PI, 2 * PI, this.recursionDepth);
    for (i = 0; i < this.recursionDepth; i++) {
      [x, y] = this.parametricCurve(T.next().value);
      for (c of [0, 1, 0.5, 1.5]) {
        p = new Point(x, y, 1, 1, null, false, 'white');
        p.rotate(c * PI, [0, 0]);
        ls.add(p);
      }
    }
    return ls;
  }

  parametricCurve(t) {
    const C = 100;
    // C*10*sin(2.78*t)*Math.round(Math.sqrt(cos(cos(8.2*t))));
    // C*9*Math.pow(cos(2.78*t), 2)*sin(sin(8.2*t));
    return [C * 2.5 * pow(sin(-5 * t), 2) * pow(2, cos(cos(4.28 * 2.3 * t))),
    C * 2.5 * sin(sin(-5 * t)) * pow(cos(4.28 * 2.3 * t), 2)];
  }

  getTitle() {
    return 'Test';
  }
}

export default Test;
