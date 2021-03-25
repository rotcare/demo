import { renderRootWidget } from '@rotcare/rx-react';
import { HomePage } from './Ui/HomePage';
import { InMemDatabase } from '@rotcare/io';

renderRootWidget(HomePage, {
    serviceProtocol: undefined as any,
    database: new InMemDatabase(),
});