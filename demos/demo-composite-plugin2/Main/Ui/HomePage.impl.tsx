import { HomePage as INF } from '@motherboard/Main/Ui/HomePage';
import * as React from 'react';

export class HomePage extends INF {
    /**
     * @override
     */
    protected renderLine2() {
        return <span>line 2 provided by plugin2</span>
    }
}