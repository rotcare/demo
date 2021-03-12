const { Impl, Scene, newTrace } = require('@rotcare/io');
Scene.currentProject = '@rotcare/demo';
const scene = new Scene(newTrace('test'), {
    database: new Impl.InMemDatabase(),
    serviceProtocol: new Impl.HttpRpcClient()
});
scene.execute(undefined, async() => {
    scene.useServices('localhost').getGreetingWords();
})
