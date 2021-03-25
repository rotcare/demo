import { Widget } from '@rotcare/rx-core';
import * as React from 'react';
import { getLocationHash } from './getLocationHash';
import { renderWidget } from '@rotcare/rx-react';
import { LoadObjectGraph } from './LoadObjectGraph/LoadObjectGraph';
import { RemoteReactive } from './RemoteReactive/RemoteReactive';

export class HomePage extends Widget {
    public render() {
        switch (getLocationHash()) {
            case '#LoadObjectGraph':
                return renderWidget(LoadObjectGraph);
            case '#RemoteReactive':
                return renderWidget(RemoteReactive);
        }
        return (
            <ul>
                <li>
                    <a href="#LoadObjectGraph">加载对象图</a>
                </li>
                <li>
                    <a href="#RemoteReactive">远程订阅刷新</a>
                </li>
            </ul>
        );
    }
}