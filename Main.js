// 初始化整个游戏的精灵，作为游戏开始的入口
import {ResoucesLoader} from "./js/base/ResoucesLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/runtime/Land.js";

export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        const loader = ResoucesLoader.create();
        loader.onloaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.dataStore
            .put('background', BackGround)
            .put('land',Land);
        Director.getInstance().run();
    }
}