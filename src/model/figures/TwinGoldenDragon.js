import AbstractFigure from './AbstractFigure.js';
import { LinkedList, Vector } from '../data_structures/DataStructureIndex.js';

const SCALE = 0.73;
const PHI = (1 + Math.sqrt(5)) / 2;

class TwinGoldenDragon extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 18, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let seed = new Vector(SCALE * h, Math.PI / 2, [x, y]);
    // ls.add(seed.toPoint(true, 'red'));
    ls = this.dragon(seed, seed, ls, this.recursionDepth);
    return ls;
  }

  dragon(v, seed, ls, recurLeft) {
    if (recurLeft === 0) {
      let s = seed.cartesian()[0];
      ls.add(v.toPoint(true, 'white'));
      let reflection = v.toPoint(true, 'green');
      reflection.vertices[0][0] = 2 * s - reflection.vertices[0][0];
      reflection.vertices[1][0] = 2 * s - reflection.vertices[1][0];
      ls.add(reflection);
      return ls;
    } else {
      let r = (1 / PHI) ** (1 / PHI);

      let long = r * v.l;
      let short = r ** 2 * v.l;

      let a = this.angle(v.l, long, short);
      let b = Math.PI - this.angle(v.l, short, long);

      let t1 = new Vector(long, v.radians + a, [...v.origin]);

      ls = this.dragon(t1, seed, ls, recurLeft - 1);

      let t2 = new Vector(short, v.radians + b, v.cartesian());
      return this.dragon(t2, seed, ls, recurLeft - 1);
    }
  }

  angle(under, over, opposite) {
    let numerator = opposite ** 2 - (under ** 2 + over ** 2);
    let denominator = -2 * under * over;
    return Math.acos(numerator / denominator);
  }

  getTitle() {
    return 'Twin Golden Ratio Dragon';
  }
}

export default TwinGoldenDragon;
