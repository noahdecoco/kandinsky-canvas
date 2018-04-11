const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');
const utils = require('../../utils');
const Graphic = require('./Graphic');

class Arc extends Graphic {
  constructor(x, y, options = {}) {
    super(x, y);
    this.x = x;
    this.y = y;
    this.options = options;

    this.radius = 30 + utils.getRandom(40);
    this.startAngle = utils.getRandom(0);
    this.endAngle = this.startAngle + utils.getRandom(3);

    this.render = this.render.bind(this);

    if (this.options.renderImmediately) this.render();
  }

  render() {
    this.graphic.clear();
    this.graphic.lineStyle(utils.getRandom(5), 0x000000);
    this.graphic.moveTo(this.x + this.radius, this.y);
    this.graphic.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
    );
  }

  animateIn() {
    if (this.options.renderImmediately) return;
  }
}

module.exports = Arc;
