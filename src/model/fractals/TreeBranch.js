import Point from './Point.js';
import LinkedList from './LinkedList.js';
import AbstractFractal from './AbstractFractal.js';

const BRANCHES = 3;
const MIN_ANGLE = 0;
const MAX_ANGLE = Math.PI / 4;
const MIN_LENGTH = 0.30;
const MAX_LENGTH = 0.90;

class TreeBranch extends AbstractFractal {
  constructor(width, height, recursionDepth, origin) {
    super(width, height, 10, origin);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    this.branch([x, y], 0.3 * (Math.sqrt(w * w + h * h)),
      Math.PI / 4, this.recursionDepth, ls);
    return ls;
  }

  branch(start, l, radians, recurLeft, ls) {
    if (recurLeft > 0) {
      let dir = Math.random() > 0.5 ? 1 : -1;
      let vertices = [start, this.end(start, l, radians)];
      let p = new Point(start[0], start[1], 0, 0, vertices, true, this.palette());
      ls.add(p);
      for (let i = 0; i < BRANCHES; i++) {
        let new_l = this.rand(l * MIN_LENGTH, l * MAX_LENGTH);
        let new_start = this.end(start, new_l, radians);
        let new_radians = radians + dir * this.rand(MIN_ANGLE, MAX_ANGLE);
        dir *= -1;
        this.branch(new_start, new_l, new_radians, recurLeft - 1, ls);
      }
    }
  }

  end(start, radius, radians) {
    return [start[0] + radius * Math.cos(radians),
    start[1] + radius * Math.sin(radians)];
  }

  palette() {
    let palette = ['#77a37a', '#5f926a', '#587e60', '#485e52', '#3a4f3f',
      '#77a37a', '#5f926a', '#587e60', '#485e52', '#3a4f3f',
      '#77a37a', '#5f926a', '#587e60', '#485e52', '#3a4f3f',
      '#603C14', '#9C2706', '#D45B12', '#F3BC2E', '#5F5426'];
    return palette[Math.round(this.rand(0, palette.length - 1))];
  }

  rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  getTitle() {
    return 'Tree Branch Fractal';
  }
}

export default TreeBranch;
