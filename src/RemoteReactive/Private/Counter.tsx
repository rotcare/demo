import { ActiveRecord, toQuery, toRun } from "@rotcare/active-record";
import { Scene } from "@rotcare/io";

export class Counter extends ActiveRecord {
    public static queryCounter = toQuery(Counter);
    public static async insertCounter(scene: Scene) {
        return await scene.insert(Counter, { count: 0 });
    }
    public static incrementCounter = toRun(Counter, 'increment');
    public static decrementCounter = toRun(Counter, 'decrement');
    public id: string;
    public count = 100;

    public async increment() {
        this.count++;
        await this.update();
    }

    public async decrement() {
        this.count--;
        await this.update();
    }
}