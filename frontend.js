const { Impl, Scene, newTrace } = require('@stableinf/io');
Scene.currentProject = '@stableinf/demo';
const scene = new Scene(newTrace('test'), {
    database: new Impl.InMemDatabase(),
    serviceProtocol: new Impl.HttpRpcClient()
});
scene.execute(undefined, async() => {
    scene.useServices('localhost').getGreetingWords();
})
