import { ActiveRecord, toGet, toQuery, toRun } from "@rotcare/active-record";
import { Scene } from "@rotcare/io";
import { MAIN_RPOJECT } from "../../MAIN_PROJECT";

export class Counter extends ActiveRecord {
    public static project = MAIN_RPOJECT;
    public static async insertCounter(scene: Scene) {
        return await scene.io.database.insert(scene, Counter, { count: 0 });
    }
    public static readonly queryCounter = toQuery(Counter);
    public static readonly getCounter = toGet(Counter);
    public static readonly incrementCounter = toRun(Counter, 'increment');
    public static readonly decrementCounter = toRun(Counter, 'decrement');
    
    public id: string;
    public count = 100;

    public async increment(scene: Scene) {
        this.count++;
        await scene.io.database.update(scene, Counter, this);
    }

    public async decrement(scene: Scene) {
        this.count--;
        await scene.io.database.update(scene, Counter, this);
    }
}