import { SomeCommand as INF } from '@motherboard/Home/Private/SomeCommand';

export class SomeCommand extends INF {
    /**
     * @override
     */
    protected async step2() {
        console.log('step2 provided by plugin2');
    }
}