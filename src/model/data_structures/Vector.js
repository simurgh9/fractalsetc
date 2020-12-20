class Vector {
  constructor(start, l, radians) {
    this.start = start;
    this.l = l;
    this.radians = radians;
    this.end = [this.start[0] + l * Math.cos(radians),
    this.start[1] + l * Math.sin(radians)];
  }

  cords() {
    return [this.start, this.end];
  }
}

export default Vector;
