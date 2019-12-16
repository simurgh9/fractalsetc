class Point {
  constructor(x, y, width, height, vertices = null,
              toFill = true, fillStyle = null,
              strokeStyle = null, lineWidth = 1) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.toFill = toFill;
    this.lineWidth = lineWidth;
    this.vertices = vertices ? vertices : this.square();
    this.fillStyle = fillStyle ? fillStyle : this.getRandomColor();
    this.strokeStyle = strokeStyle ? strokeStyle : this.fillStyle;
  }

  square() {
    return [
      [this.x, this.y],                   // top left corner
      [this.x + this.w, this.y],          // top right corner
      [this.x + this.w, this.y + this.h], // bottom right corner
      [this.x, this.y + this.h],          // bottom left corner
    ];
  }

  getRandomColor() {
    let ret = (0x1000000 + Math.random() * 0xffffff);
    return '#' + ret.toString(16).substr(1, 6);
  }

  getVertices() {
    return this.vertices;
  }

  fill() {
    return this.toFill;
  }
  
  getFillStyle() {
    return this.fillStyle;
  }

  getStrokeStyle() {
    return this.strokeStyle;
  }

  getLineWidth() {
    return this.lineWidth;
  }
}

export default Point;
    
