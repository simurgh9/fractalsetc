const cos = Math.cos;
const sin = Math.sin;

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

  setFillStyle(fillStyle) {
    this.fillStyle = fillStyle;
  }

  setStrokeStyle(strokeStyle) {
    this.strokeStyle = strokeStyle;
  }
  
  rotate(rad, origin) {
    if(rad === 0)
      return;
    
    let X, Y;
    if (origin === null) {
      X = this.x + this.w/2;
      Y = this.y + this.h/2;
    } else {
      X = origin[0];
      Y = origin[1];
    }
    
    let T = [[ cos(rad), sin(rad), X - (X * cos(rad) + Y * sin(rad))],
             [-sin(rad), cos(rad), Y - (Y * cos(rad) - X * sin(rad))],
             [0        , 0       , 1]];
    for(let i = 0; i < this.vertices.length; i++) {
      let x = this.vertices[i][0];
      let y = this.vertices[i][1];
      let z = 1;
      this.vertices[i] = [(x * T[0][0]) + (y * T[0][1]) + (z * T[0][2]),
                          (x * T[1][0]) + (y * T[1][1]) + (z * T[1][2])];
    }
    // {{cos(r), sin(r), x - (x cos(r) + y sin(r))},
    // {-(sin(r)), cos(r), y - (y cos(r) - x sin(r))}, {0, 0, 1}}
    // *{{x,x+w,x+w,x},{y,y,y+h,y+h},{1,1,1,1}}
  }
}

export default Point;
    
