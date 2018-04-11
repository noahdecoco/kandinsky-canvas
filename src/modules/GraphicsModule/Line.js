const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');
const utils = require('../../utils');
const Graphic = require('./Graphic');

class Line extends Graphic {
  constructor(x, y, options = {}) {
    super(x, y);
    this.x = x;
    this.y = y;
    this.options = options;

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

    this.render = this.render.bind(this);

    if (this.options.renderImmediately) this.render();
  }

  render() {
    this.graphic.clear();
    this.graphic.lineStyle(this.thickness, 0x000000);
    this.graphic.moveTo(this.startPoint.x, this.startPoint.y);
    this.graphic.lineTo(this.endPoint.x, this.endPoint.y);
  }

  animateIn() {
    if (this.options.renderImmediately) return;

    const tl = new TimelineLite({
      onUpdate: this.render,
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
