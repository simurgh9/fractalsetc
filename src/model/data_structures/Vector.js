import {Point} from './DataStructureIndex.js';

class Vector {
  constructor(start, l, radians) {
    this.start = start;
    this.l = l;
    this.radians = radians;
    this.end = [this.start[0] + l * Math.cos(radians),
    this.start[1] + l * Math.sin(radians)];
  }

  addVector(ls) {
    let vertices = [this.start, this.end];
    ls.add(new Point(this.start[0], this.start[1], 0, 0, vertices, true, '#fffafa', null, 2));
    return ls;
  }
}

export default Vector;
