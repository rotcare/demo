const { Impl, Scene } = require('@rotcare/io');
const { renderRootWidget } = require('@rotcare/rx-react');
const { HomePage } = require('@motherboard/Home/Ui/HomePage');

Scene.currentProject = '@rotcare/demo';
renderRootWidget(HomePage, {
    serviceProtocol: new Impl.HttpRpcClient(),
    database: new Impl.InMemDatabase(),
});