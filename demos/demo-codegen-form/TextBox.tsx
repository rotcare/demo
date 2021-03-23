import * as React from 'react';

export function TextBox(props: { form: object, formProp: string }) {
    return <input onChange={(e) => {
        Reflect.set(props.form, props.formProp, e.target.value);
    }}/>
}