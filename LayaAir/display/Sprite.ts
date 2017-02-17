/**
 * Created by anlun on 2017/2/17.
 */
/**
 * @module annie
 */
namespace annie {
    /**
     * 矢量对象
     * @class annie.Sprite
     * @extends laya.display.Sprite
     * @since 1.0.0
     * @public
     */
    export class Sprite extends laya.display.Sprite{
        public constructor() {
            super();
        }
        public on(type: string, caller: any, listener: Function, args?: Array<any>): laya.events.EventDispatcher{
            if(/^[mouse|click|drag|roll]/.test(type)) {
                this.autoSize = true;
            }
            return super.on(type,caller,listener,args);
        }
    }
}