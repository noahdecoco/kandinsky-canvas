const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');
const utils = require('../../utils');
const Graphic = require('./Graphic');

class Line extends Graphic {
  constructor(x, y, graphic) {
    super(x, y);
    this.x = x;
    this.y = y;

    this.length = 60 + utils.getRandom(160);
    this.thickness = utils.getRandom(5);

    this.startPoint = {
      x: x - this.length / 2,
      y: y,
    };

    this.endPoint = {
      x: x + this.length / 2,
      y: y,
    };
  }

  animateIn() {
    const tl = new TimelineLite({
      onUpdate: () => {
        this.graphic.clear();
        this.graphic.lineStyle(this.thickness, 0x000000);
        this.graphic.moveTo(this.startPoint.x, this.startPoint.y);
        this.graphic.lineTo(this.endPoint.x, this.endPoint.y);
      },
    });

    tl.from(
      this.startPoint,
      1,
      {
        x: this.x,
        y: this.y,
      },
      0,
    );

    tl.from(
      this.endPoint,
      1,
      {
        x: this.x,
        y: this.y,
      },
      0,
    );
  }
}

module.exports = Line;
