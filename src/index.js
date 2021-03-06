import './main.css';

import 'pixi.js';
import 'leapjs';
import 'leapjs-plugins';

const utils = require('./utils');

import GraphicsModule from './modules/GraphicsModule';

class KandinskyCanvas {
  constructor() {
    this.onCanvasClickHandler = this.onCanvasClickHandler.bind(this);
    this.onHandHandler = this.onHandHandler.bind(this);

    this.setupPixiApp();
    this.setupLeapLoop();
    this.setupEventHandlers();
  }

  setupPixiApp() {
    this.canvas = document.createElement('canvas');
    this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {
      view: this.canvas,
      antialias: true,
      backgroundColor: 0xd5cca9,
    });
  }

  setupLeapLoop() {
    Leap.loop({
      hand: this.onHandHandler,
    }).use('screenPosition');
  }

  drawGraphic(x, y) {
    const graphic = GraphicsModule.drawRandom(x, y, {
      renderImmediately: false,
    });
    this.app.stage.addChild(graphic.graphic);
    graphic.animateIn();
  }

  setupEventHandlers() {
    this.canvas.addEventListener('click', this.onCanvasClickHandler);
  }

  onHandHandler(hand) {
    if (!utils.hasTimePassed(150)) return;
    this.drawGraphic(hand.screenPosition()[0], hand.screenPosition()[1]);
  }

  onCanvasClickHandler(evt) {
    if (!utils.hasTimePassed(150)) return;
    this.drawGraphic(evt.clientX, evt.clientY);
  }

  get view() {
    return this.app.view;
  }
}

const kandinskyCanvas = new KandinskyCanvas();

document.body.appendChild(kandinskyCanvas.view);
