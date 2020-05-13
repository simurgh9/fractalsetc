/*
 The code in this fractal is a little bit of a mess.
 I tried making this:
 https://fractaltales.blogspot.com/2013/08/self-similar-fractals-quilts-and.html
*/

import Point from './Point.js';
import LinkedList from './LinkedList.js';
import AbstractFractal from './AbstractFractal.js';

class QuiltFractal extends AbstractFractal {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 7, origin, true);
  }

  set(x, y, w, h) {
    let l = Math.min(w, h);
    let points = this.markPoints(x, y, l);
    this.rotatePoints(points, 0, this.getRecursionDepth());
    this.rotatePoints(points, 1, this.getRecursionDepth());
    this.rotatePoints(points, 2, this.getRecursionDepth());
    this.rotatePoints(points, 3, this.getRecursionDepth());
    return this.rotatePoints(points, 4, this.getRecursionDepth());
  }

  markPoints(x, y, l, ls = new LinkedList(), r = 0) {
    if (r >= this.recursionDepth) {
      let p = new Point(x, y, l, l, null, false, '#afff14');
      ls.add(p);
      return ls;
    }

    let l_new = 0.25 * l;
    let x_new = x + 0.75 * l;
    let y_new = y + 0.75 * l;
    
    ls = this.markPoints(x    , y    , l_new, ls, ++r);
    ls = this.markPoints(x_new, y    , l_new, ls,   r);
    ls = this.markPoints(x_new, y_new, l_new, ls,   r);
    ls = this.markPoints(x    , y_new, l_new, ls,   r);
    return this.markPoints(this.cord(x, l), this.cord(y, l),
                           this.dist(l), ls, r);
  }

  rotatePoints(points, starting_block, r) {
    if (r === 0)
      return points;
    
    let indices = this.subsetIndices(starting_block, r);
    let pointsSliced = points.slice(indices[0], indices[1]);
    let O = pointsSliced.tail();
    O = [O.x + O.w/2, O.y + O.h/2];
    if (starting_block === 4)
      this.rotateAll(pointsSliced, O);

    this.rotatePoints(pointsSliced, 4, --r);
    return points;
  }

  rotateAll(points, rotationOrigin) {
    for (const p of points) {
      p.rotate(Math.PI/4, rotationOrigin);
    }
  }
  
  subsetIndices(position, r) {
    if (position > 4 || position < 0)
      throw new Error("subsetIndices(position), invalid position: " + position);
    return [(position)*(Math.pow(5, r - 1)), (position+1)*(Math.pow(5, r - 1))];
  }
  
  dist(l) {
    return Math.sqrt(2) * l / 2;
  }

  cord(cordinate, l) {
    return cordinate + (l / 2) - (this.dist(l) / 2);
  }
  
  getTitle() {
    return 'Some Fractal Quilt';
  }
}

export default QuiltFractal;
