// 资源文件加载类，确保canvas在图片资源加载完成后才进行渲染
import {Resouces} from "./Resouces.js";

export class ResoucesLoader {
    constructor() {
        this.map = new Map(Resouces);
        for (let [key, value] of this.map) {
            const image = new Image();
            image.src = value;
            this.map.set(key, image);
        }
    }

    onloaded(callback) {
        let loadedCount = 0;
        for (let value of this.map.values()) {
            value.onload = () => {
                loadedCount++;
                if (loadedCount >= this.map.size) {
                    callback(this.map);
                }
            }
        }
    }

    static create(){
        return new ResoucesLoader();
    }
}