export class SomeCommand {
    public async run() {
        await this.step1();
        await this.step2();
    }
    /**
     * @virtual
     */
    protected async step1() {
    }
    /**
     * @virtual
     */
    protected async step2() {
    }
}