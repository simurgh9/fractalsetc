import Point from './Point.js';
import LinkedList from './LinkedList.js';
import AbstractFractal from './AbstractFractal.js';

class Mondrian extends AbstractFractal {
  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    if (r >= this.recursionDepth) {
      let p = new Point(x, y, w, h,
                        null, true, this.palette(), '#30303a', 5);
      ls.add(p);
      return ls;
    }
    let i = this.rand(x, w)+0.2*w;
    let j = this.rand(y, h)+0.2*h;
    ls = this.set(  x    , y    , x + i, y + j, ls, ++r); // upper left rectangle
    ls = this.set(  x + i, y    , w - i, y + j, ls, r);   // upper right rectangle
    ls = this.set(  x    , y + j, x + i, h - j, ls, r);   // lower left rectangle
    return this.set(x + i, y + j, w - i, h - j, ls, r);   // lower right rectangle
  }

  getTitle() {
    return 'Piet Mondrian';
  }

  palette() {
                 // white      red        yellow     blue       black
    let palette = ['#FEFFFA', '#F60201', '#FDED01', '#1F7FC9', '#30303a'];
    return palette[Math.round(this.rand(0, 4))];
  }
  
  rand(min, max) {
    return Math.random() * (max - min) + min;
  }
}

export default Mondrian;
