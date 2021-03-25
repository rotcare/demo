import { Widget } from '@rotcare/rx-core';
import * as React from 'react';
import { LocalReactive } from './LocalReactive';
import { getLocationHash } from './getLocationHash';
import { renderWidget } from '@rotcare/rx-react';

export class HomePage extends Widget {
    public render() {
        switch (getLocationHash()) {
            case '#LocalReactive':
                return renderWidget(LocalReactive);
        }
        return (
            <ul>
                <li>
                    <a href="#LocalReactive">本地订阅刷新</a>
                </li>
            </ul>
        );
    }
}
