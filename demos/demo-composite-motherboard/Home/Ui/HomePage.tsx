import * as React from 'react';

export class HomePage {
    public render() {
        return (
            <div>
                {this.renderLine1()}
                <hr />
                {this.renderLine2()}
                <div>
                <button
                    onClick={() => {
                        fetch('http://localhost:3000/SomeCommand', { method: 'POST' });
                    }}
                >
                    call SomeCommand
                </button>
                </div>
            </div>
        );
    }
    /**
     * @virtual
     */
    protected renderLine1() {
        return <></>;
    }
    /**
     * @virtual
     */
    protected renderLine2() {
        return <></>;
    }
}
