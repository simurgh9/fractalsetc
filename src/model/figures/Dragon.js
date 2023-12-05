import AbstractFigure from './AbstractFigure.js';
import {LinkedList, Vector, Point} from '../data_structures/DataStructureIndex.js';


const SCALE = 0.8;

class Dragon extends AbstractFigure {
    constructor(width, height, recursionDepth, origin) {
      super(width, height, 14, origin, true);
    }
  
    set(x, y, w, h, ls = new LinkedList(), r = 0) {
      /*let vertices = [[x,y], [x+w,y]];
      let seed = new Point(x,y,w,h,vertices)*/
      let start = new Point(x,y);
      let end = new Point(x+w/2,y);
      return this.dragon(start,end, ls, this.recursionDepth, 'yellow');
    }
    
  
    dragon(a, b, ls, recurLeft, color, clockwise = true) {
        if (recurLeft === 0) {
          let vertices = [[a.x,a.y], [b.x,b.y]];
          ls.add(new Point(vertices[0][0], vertices[0][1], 0, 0, vertices, true, color));
          return ls;
        } else {
            let l = Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2));
            //let turn = clockwise ? 25 : -25;
            let theta = clockwise ? -Math.PI/6 : Math.PI/6;
            let rotation= this.getAngle(a.x,a.y,b.x,b.y);
            rotation += theta;
            
            //a1.rotate(rotation, a1);

            let c = new Point(this.len(l)*Math.cos(rotation)+a.x,
                this.len(l)*Math.sin(rotation)+a.y);

            //let c = new Point(a.x+this.len(l), a.y-this.len(l));
            ls = this.dragon(a,c,ls, recurLeft - 1, "orange", true);
            return this.dragon(c,b,ls,recurLeft -1, "white", false);
      }
    }

    getAngle(fromX,fromY,toX,toY,force2pi = true) {
      let deltaX = fromX-toX; 
      let deltaY = fromY-toY; // reverse
      let radians = Math.atan2(deltaY, deltaX) +Math.PI;
      return radians;
    }
  
    len(l) {
      return (l ** 2 / 2) ** (1 / 2);
    }

    getTitle() {
        return 'Dragon Curve';
    }
}

export default Dragon;