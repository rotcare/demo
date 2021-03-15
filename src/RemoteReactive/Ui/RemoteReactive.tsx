import { Scene } from "@rotcare/io";
import { Future, Widget } from "@rotcare/rx-core";
import * as React from 'react';
import type { Counter } from '../Private/Counter';

function $(scene: Scene) {
    return scene.useServices<typeof Counter>();
}

// 可以用 Future 来缓存一些跨 widget 的公共数据
export const bigCounters = new Future(async (scene) => {
    const allCounters = await $(scene).queryCounter({});
    const bigCounters = [];
    for (const counter of allCounters) {
        if (counter.count >= 5) {
            bigCounters.push(counter);
        }
    }
    return bigCounters;
})

export class RemoteReactive extends Widget {
    public remoteData = this.subscribe(async (scene) => {
        return {
            counters: await $(scene).queryCounter({}),
            bigCounters: await bigCounters.get(scene),
        };
    });
    public render() {
        return (
            <div>
                <span>大 counter 数量: {this.remoteData.bigCounters.length}</span>
                <ul>
                    {this.remoteData.counters.map((c) => (
                        <li key={c.id}>
                            <button onClick={this.callback('decrement', c)}>-</button>
                            {c.count}
                            <button onClick={this.callback('increment', c)}>+</button>
                        </li>
                    ))}
                </ul>
                <button onClick={this.callback('addCounter')}>新建 counter</button>
            </div>
        );
    }

    public async increment(scene: Scene, counter: Counter) {
        await $(scene).incrementCounter(counter.id);
    }

    public async decrement(scene: Scene, counter: Counter) {
        await $(scene).decrementCounter(counter.id);
    }

    public async addCounter(scene: Scene) {
        await $(scene).insertCounter();
    }
}