import AbstractFigure from './AbstractFigure.js';
import {LinkedList, Point} from '../data_structures/DataStructureIndex.js';


class SierpinskiTri extends AbstractFigure {
  set(x, y, w, h, ls=new LinkedList(), r = 0) {
    if (r >= this.recursionDepth) {
      let vertices = [[x + w / 2, y], [x, y + h], [x + w, y + h]];
      let p = new Point(x, y, w, h, vertices);
      ls.add(p);
      return ls;
    }
    
    ls = this.set(  x        , y + h / 2, w / 2, h / 2, ls, ++r);
    ls = this.set(  x + w / 2, y + h / 2, w / 2, h / 2, ls, r);
    return this.set(x + w / 4, y        , w / 2, h / 2, ls, r);
  }

  getTitle() {
    return 'Sierpinski\'s Triangle';
  }
}

export default SierpinskiTri;
