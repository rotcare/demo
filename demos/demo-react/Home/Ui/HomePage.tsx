import { Widget } from '@rotcare/rx-core';
import * as React from 'react';
import { LocalReactive } from '../../LocalReactive/Ui/LocalReactive';
import { getLocationHash } from './getLocationHash';
import { renderWidget } from '@rotcare/rx-react';
import { EnrollmentForm } from '../../WidgetCodegen/Ui/EnrollmentForm';

export class HomePage extends Widget {
    public render() {
        switch (getLocationHash()) {
            case '#LocalReactive':
                return renderWidget(LocalReactive);
            case '#WidgetCodegen':
                return renderWidget(EnrollmentForm);
        }
        return (
            <ul>
                <li>
                    <a href="#LocalReactive">本地订阅刷新</a>
                </li>
                <li>
                    <a href="#WidgetCodegen">界面生成</a>
                </li>
            </ul>
        );
    }
}
