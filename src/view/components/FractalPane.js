import '../css/FractalPane.css';

import React, { Component } from 'react';

class FractalPane extends Component {

  plotPoints(toClearPreviousPlot=false) {
    let canvas = this.refs.canvas;
    const context = canvas.getContext('2d');
    if (toClearPreviousPlot) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    let points = this.props.fractal.points;
    for (const p of points) {
      this.drawPoint(context, p);
    }
  }
  
  componentDidMount() {
    this.plotPoints();
  }

  componentDidUpdate() {
    this.plotPoints(true);
  }

  drawPoint(context, point) {
    context.fillStyle = point.getFillStyle();
    context.strokeStyle = point.getStrokeStyle();
    context.lineWidth = point.getLineWidth();
    context.beginPath();
    
    let vert = point.getVertices();
    // vert.push(vert[0]);
    context.moveTo(vert[0][0], vert[0][1]);

    for (let i = 1; i < vert.length; i++) {
      context.lineTo(vert[i][0], vert[i][1]);
    }

    context.closePath();
    context.stroke();
    
    if (point.fill()) {
      context.fill();
    }
  }

  render() {
    let width, height;
    width = this.props.fractal.width;
    height = this.props.fractal.height;
    return <canvas
             id='fractal_pane'
             ref="canvas"
             width={width}
             height={height}
           />;
  }
}

export default FractalPane;
