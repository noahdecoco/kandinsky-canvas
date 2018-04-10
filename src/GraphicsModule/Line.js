const Pixi = require('pixi.js');
const TimelineLite = require('gsap/TimelineLite');

const getRandom = num => Math.ceil(Math.random() * num);

class Line {
  constructor(x, y) {
    this.graphic = new Pixi.Graphics();
    this.graphic.cacheAsBitmapboolean = true;

    this.x = x;
    this.y = y;

    this.length = 60 + getRandom(160);
    this.thickness = getRandom(5);

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

  get graphic() {
    return this._graphic;
  }

  set graphic(graphic) {
    this._graphic = graphic;
  }
}

module.exports = Line;
