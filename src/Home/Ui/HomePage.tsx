import { Widget } from '@rotcare/rx-core';
import * as React from 'react';
import { LocalReactive } from '../../LocalReactive/Ui/LocalReactive';
import { getLocationHash } from './getLocationHash';
import { renderWidget } from '@rotcare/rx-react';
import { LoadObjectGraph } from '../../LoadObjectGraph/Ui/LoadObjectGraph';

export class HomePage extends Widget {
    public render() {
        switch (getLocationHash()) {
            case '#LocalReactive':
                return renderWidget(LocalReactive);
            case '#LoadObjectGraph':
                return renderWidget(LoadObjectGraph);
        }
        return (
            <ul>
                <li>
                    <a href="#LocalReactive">本地订阅刷新</a>
                </li>
                <li>
                    <a href="#LoadObjectGraph">加载对象图</a>
                </li>
            </ul>
        );
    }
}
