import { renderRootWidget } from '@rotcare/rx-react';
import { HomePage } from './Home/Ui/HomePage';
import { InMemDatabase, Scene } from '@rotcare/io';

Scene.currentProject = '@rotcare/demo';
Scene.serviceDiscover = (options) => {
    return { host: 'localhost', port: options.port }
}
renderRootWidget(HomePage, {
    serviceProtocol: undefined as any,
    database: new InMemDatabase(),
});