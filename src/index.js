import './main.css';

import * as PIXI from 'pixi.js';
import Leap from 'leapjs';
import 'leapjs-plugins';

import GraphicsModule from './GraphicsModule';

class KandinskyCanvas {

    constructor() {
        this.onCanvasClickHandler = this.onCanvasClickHandler.bind(this);

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
            hand: this.onHandHandler
        });
    }

    drawGraphic(x, y) {
        this.app.stage.addChild(GraphicsModule.getRandom(x, y));
    }

    setupEventHandlers() {
        this.canvas.addEventListener('click', this.onCanvasClickHandler)
    }

    onHandHandler(hand) {
        this.drawGraphic(hand.screenPosition()[0], hand.screenPosition()[1]);
    }

    onCanvasClickHandler(evt) {
        this.drawGraphic(evt.clientX, evt.clientY);
    }

    get view() {
        return this.app.view;
    }

}

const kandinskyCanvas = new KandinskyCanvas();

document.body.appendChild(kandinskyCanvas.view);
