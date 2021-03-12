const { Impl, Scene } = require('@rotcare/io');
const { renderRootWidget } = require('@rotcare/rx-react');
const { HomePage } = require('@motherboard/Home/Ui/HomePage');

Scene.currentProject = '@rotcare/demo';
Scene.serviceDiscover = (options) => {
    return { host: 'localhost', port: options.port }
}
renderRootWidget(HomePage, {
    serviceProtocol: new Impl.HttpRpcClient(),
    database: new Impl.InMemDatabase(),
});