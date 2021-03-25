import { SomeCommand as INF } from '@motherboard/Main/Private/SomeCommand';

export class SomeCommand extends INF {
    /**
     * @override
     */
    protected async step1() {
        // 演示 error 的 stack trace 能够正确被 source map
        console.log('step1 provided by plugin1', new Error());
    }
}