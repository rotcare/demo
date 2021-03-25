import { HomePage as INF } from '@motherboard/Main/Ui/HomePage';
import * as React from 'react';

export class HomePage extends INF {
    /**
     * @override
     */
    protected renderLine1() {
        // 演示 error 的 stack trace 能够正确被 source map
        console.log(new Error());
        return <span>line 1 provided by plugin1</span>
    }
}