const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');

const Line = require('./Line');
const utils = require('../../utils');

class GraphicsModule {
  drawLine(x, y) {
    return new Line(x, y);
  }

  drawRings(x, y) {
    const graphic = new PIXI.Graphics();
    graphic.cacheAsBitmapboolean = true;

    const baseRadius = 30 + utils.getRandom(40);
    const numCircles = utils.getRandom(8);
    let radius = baseRadius;

    graphic.lineStyle(utils.getRandom(5), 0x000000);

    for (let i = 0; i < numCircles; i++) {
      radius += Math.random() < 0.2 ? 20 : 5;
      graphic.drawCircle(x, y, radius);
    }

    return graphic;
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

  drawArcs(x, y) {
    const graphic = new PIXI.Graphics();
    graphic.cacheAsBitmapboolean = true;

    const baseRadius = 30 + utils.getRandom(40);
    const num = utils.getRandom(8);
    const startAngle = utils.getRandom(0);
    const endAngle = startAngle + utils.getRandom(3);

    let radius = baseRadius;

    for (let i = 0; i < num; i++) {
      radius += Math.random() < 0.2 ? 20 : 5;
      graphic.lineStyle(utils.getRandom(5), 0x000000);
      graphic.moveTo(x + radius, y);
      graphic.arc(x, y, radius, startAngle, endAngle);
    }

    return graphic;
  }

  drawRandom(x, y) {
    let random = utils.getRandom(3);

    switch (random) {
      case 1:
        return this.drawArcs(x, y);
      case 2:
        return this.drawRings(x, y);
      case 3:
        return this.drawLine(x, y);
      case 4:
        return this.drawCircle(x, y);
    }
  }
}

module.exports = new GraphicsModule();
