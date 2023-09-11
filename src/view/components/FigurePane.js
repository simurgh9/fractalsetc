import React, { Component } from 'react';

class FigurePane extends Component {
  plotPoints(toClearPreviousPlot = false) {
    let canvas = this.refs.canvas;
    const context = canvas.getContext('2d');
    if (toClearPreviousPlot)
      context.clearRect(0, 0, canvas.width, canvas.height);
    let points = this.props.figure.points;
    for (const p of points) this.drawPoint(context, p);
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
    context.moveTo(vert[0][0], vert[0][1]);
    for (let i = 1; i < vert.length; i++)
      context.lineTo(vert[i][0], vert[i][1]);
    context.closePath();
    context.stroke();

    // https://stackoverflow.com/q/30574967/12035739
    point.fill() && context.fill();
  }

  render() {
    let w = this.props.figure.width;
    let h = this.props.figure.height;
    return <canvas ref="canvas" width={w} height={h} />;
  }
}

export default FigurePane;
