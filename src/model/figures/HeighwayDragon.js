import AbstractFigure from './AbstractFigure.js';
import { LinkedList, Vector } from '../data_structures/DataStructureIndex.js';

const SCALE = 0.43;

class HeighwayDragon extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 14, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let l = SCALE * Math.min(w, h);
    let seed = new Vector(l, 0, [x, y]);
    ls = this.dragon(seed, ls, this.recursionDepth, 'red');
    seed = new Vector(l, Math.PI / 2, [x, y]);
    ls = this.dragon(seed, ls, this.recursionDepth, 'green');
    seed = new Vector(l, Math.PI, [x, y]);
    ls = this.dragon(seed, ls, this.recursionDepth, 'blue');
    seed = new Vector(l, 1.5 * Math.PI, [x, y]);
    return this.dragon(seed, ls, this.recursionDepth, 'yellow');
  }

  dragon(v, ls, recurLeft, color, clockwise = true) {
    if (recurLeft === 0) {
      ls.add(v.toPoint(true, color));
      return ls;
    } else {
      let radians = clockwise ? Math.PI / 4 : -Math.PI / 4;
      let t1 = new Vector(this.len(v.l), v.radians + radians, [...v.origin]);
      ls = this.dragon(t1, ls, recurLeft - 1, color, true);
      radians = clockwise ? -Math.PI / 4 : Math.PI / 4;
      let t2 = new Vector(this.len(v.l), v.radians + radians, t1.cartesian());
      return this.dragon(t2, ls, recurLeft - 1, color, false);
    }
  }

  len(l) {
    return (l ** 2 / 2) ** (1 / 2);
  }

  getTitle() {
    return 'Harter–Heighway Dragon';
  }
}

export default HeighwayDragon;
