import { renderRootWidget } from '@rotcare/rx-react';
import { HomePage } from './Ui/HomePage';
import { InMemDatabase, ServiceDispatcher } from '@rotcare/io';

renderRootWidget(HomePage, {
    service: new ServiceDispatcher(new InMemDatabase(), undefined as any),
});