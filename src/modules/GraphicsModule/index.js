const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');

const utils = require('../../utils');

const Arc = require('./Arc');
const Circle = require('./Circle');
const Line = require('./Line');
const Ring = require('./Ring');

class GraphicsModule {
  drawArc(x, y, options) {
    return new Arc(x, y, options);
  }

  drawLine(x, y, options) {
    return new Line(x, y, options);
  }

  drawRing(x, y, options) {
    return new Ring(x, y, options);
  }

  drawCircle(x, y, options) {
    return new Circle(x, y, options);
  }

  drawRandom(x, y, options) {
    let random = utils.getRandom(4);

    switch (random) {
      case 1:
        return this.drawArc(x, y, options);
      case 2:
        return this.drawCircle(x, y, options);
      case 3:
        return this.drawLine(x, y, options);
      case 4:
        return this.drawRing(x, y, options);
    }
  }
}

module.exports = new GraphicsModule();
