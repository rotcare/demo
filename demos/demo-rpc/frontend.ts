import { renderRootWidget } from '@rotcare/rx-react';
import { HomePage } from './Home/Ui/HomePage';
import { InMemDatabase, Scene } from '@rotcare/io';
import { HttpRpcClient } from '@rotcare/io-http-rpc';
import { ActiveRecord } from '@rotcare/active-record';

Scene.currentProject = '@rotcare/demo';
Scene.serviceDiscover = (options) => {
    return { host: 'localhost', port: options.port }
}
renderRootWidget(HomePage, {
    serviceProtocol: new HttpRpcClient({ decode: ActiveRecord.decode }),
    database: new InMemDatabase(),
});