const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');

class Graphic {
  constructor() {
    this.graphic = new PIXI.Graphics();
    this.graphic.cacheAsBitmapboolean = true;
  }

  render() {}

  animateIn() {
    // default animateIn
  }

  animateOut() {
    // default animateOut
  }

  get graphic() {
    return this._graphic;
  }

  set graphic(graphic) {
    this._graphic = graphic;
  }
}

module.exports = Graphic;
