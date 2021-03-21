import { HomePage as INF } from '@motherboard/Home/Ui/HomePage';
import * as React from 'react';

export class HomePage extends INF {
    /**
     * @override
     */
    protected renderLine1() {
        return <span>line 1 provided by plugin1</span>
    }
}