import AbstractFigure from './AbstractFigure.js';
import { LinkedList, Vector, Point } from '../data_structures/DataStructureIndex.js';

const SCALE = 0.43;

class HeighwayDragon extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 14, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let l = SCALE * Math.min(w, h);
    let seed = new Vector([x, y], l, 0);
    ls = this.dragon(seed, ls, this.recursionDepth, 'red');
    seed = new Vector([x, y], l, Math.PI / 2);
    ls = this.dragon(seed, ls, this.recursionDepth, 'green');
    seed = new Vector([x, y], l, Math.PI);
    ls = this.dragon(seed, ls, this.recursionDepth, 'blue');
    seed = new Vector([x, y], l, 1.5 * Math.PI);
    return this.dragon(seed, ls, this.recursionDepth, 'yellow');
  }

  dragon(v, ls, recurLeft, color, clockwise = true) {
    if (recurLeft === 0) {
      let vertices = v.cords();
      ls.add(new Point(vertices[0][0], vertices[0][1], 0, 0, vertices, true, color));
      return ls;
    } else {
      let radians = clockwise ? Math.PI / 4 : -Math.PI / 4;
      let t1 = new Vector([...v.start], this.len(v.l), v.radians + radians);
      ls = this.dragon(t1, ls, recurLeft - 1, color, true);
      radians = clockwise ? -Math.PI / 4 : Math.PI / 4;
      let t2 = new Vector([...t1.end], this.len(v.l), v.radians + radians);
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
