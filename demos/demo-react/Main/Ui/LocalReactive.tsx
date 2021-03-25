import { Widget } from "@rotcare/rx-core";
import * as React from 'react';

export class LocalReactive extends Widget {
    private count = 0;
    protected render() {
        return (
            <div>
                counter: 
                <button onClick={this.callback('decrement')}>-</button>
                {this.count}
                <button onClick={this.callback('increment')}>+</button>
            </div>
        );
    }
    public increment() {
        this.count++;
    }
    public decrement() {
        this.count--;
    }
}