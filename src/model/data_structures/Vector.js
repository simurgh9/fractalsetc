import { Point } from './DataStructureIndex.js';

class Vector {
  constructor(l, radians, origin = [0, 0]) {
    this.origin = origin;
    this.l = l;
    this.radians = radians;
  }

  cartesian() {
    return [
      this.origin[0] + this.l * Math.cos(this.radians),
      this.origin[1] + this.l * Math.sin(this.radians),
    ];
  }

  toPoint(toFill = true, fillStyle = null, strokeStyle = null, lineWidth = 1) {
    let x = this.origin[0];
    let y = this.origin[1];
    let verts = [[x, y], this.cartesian()];
    return new Point(
      x,
      y,
      0,
      0,
      verts,
      toFill,
      fillStyle,
      strokeStyle,
      lineWidth
    );
  }
}

export default Vector;
