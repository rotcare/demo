import { Impl, Scene } from '@rotcare/io';
import { renderRootWidget } from '@rotcare/rx-react';
import { ActiveRecord } from '@rotcare/active-record';
const { HomePage } = require('@motherboard/Home/Ui/HomePage');

Scene.currentProject = '@rotcare/demo';
Scene.serviceDiscover = (options) => {
    return { host: 'localhost', port: options.port }
}
renderRootWidget(HomePage, {
    serviceProtocol: new Impl.HttpRpcClient({ decode: ActiveRecord.decode }),
    database: new Impl.InMemDatabase(),
});