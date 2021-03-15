const { Impl, Scene } = require('@rotcare/io');
const { renderRootWidget } = require('@rotcare/rx-react');
const { HomePage } = require('@motherboard/Home/Ui/HomePage');
const { ActiveRecord } = require('@rotcare/active-record');

Scene.currentProject = '@rotcare/demo';
Scene.serviceDiscover = (options) => {
    return { host: 'localhost', port: options.port }
}
renderRootWidget(HomePage, {
    serviceProtocol: new Impl.HttpRpcClient({ decode: ActiveRecord.decode }),
    database: new Impl.InMemDatabase(),
});