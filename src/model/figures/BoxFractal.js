import AbstractFigure from './AbstractFigure.js';
import {LinkedList, Point} from '../data_structures/DataStructureIndex.js';


class BoxFractal extends AbstractFigure {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 7, origin);
  }
  
  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    if (r >= this.recursionDepth) {
      let p = new Point(x, y, w, h);
      ls.add(p);
      return ls;
    }

    ls = this.set(x, y, w / 3, h / 3, ls, ++r);
    ls = this.set(x + 2 * w / 3, y, w / 3, h / 3, ls, r);
    ls = this.set(x, y + 2 * h / 3, w / 3, h / 3, ls, r);
    ls = this.set(x + 2 * w / 3, y + 2 * h / 3, w / 3, h / 3, ls, r);
    return this.set(x + w / 3, y + h / 3, w / 3, h / 3, ls, r);
  }

  getTitle() {
    return 'Box Fractal';
  }
}

export default BoxFractal;
