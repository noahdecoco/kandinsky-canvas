const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');

const utils = require('../../utils');

const Arc = require('./Arc');
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

  drawCircle(x, y) {
    const graphic = new PIXI.Graphics();
    graphic.cacheAsBitmapboolean = true;

    const baseRadius = 30 + utils.getRandom(40);

    graphic.lineStyle(utils.getRandom(5), 0x000000);
    graphic.beginFill(0x000000);

    graphic.drawCircle(x, y, radius);

    graphic.endFill();

    return graphic;
  }

  drawRandom(x, y, options) {
    let random = utils.getRandom(3);

    switch (random) {
      case 1:
        return this.drawArc(x, y, options);
      case 2:
        return this.drawLine(x, y, options);
      case 3:
        return this.drawRing(x, y, options);
      case 4:
        return this.drawCircle(x, y, options);
    }
  }
}

module.exports = new GraphicsModule();
