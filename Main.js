// 初始化整个游戏的精灵，作为游戏开始的入口
import {ResoucesLoader} from "./js/base/ResoucesLoader.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        const loader = ResoucesLoader.create();
        loader.onloaded(map => this.onResourceFirstLoaded(map));

        let image = new Image();
        image.src = '../res/background.png';

        image.onload = () => {
            this.ctx.drawImage(
                image,
                0,
                0,
                image.width,
                image.height,
                0,
                0,
                image.width,
                image.height
            );
        };

    }

    onResourceFirstLoaded(map) {
        console.log(map);
    }
}