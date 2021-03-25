import { Model } from "@rotcare/codegen";
import * as React from 'react';

export function generateFormEditor<T>(model: Model<T>, options: {
    [Property in keyof T]?: string 
}): (props: { form: T }) => React.ReactElement {
    const lines = [
`const React = require('react');
const { TextBox } = require('@rotcare/demo-codegen-form');
return function render(props) {
        return <div>`,
    ];
    for (const prop of model.properties) {
        lines.push(`<div>${(options as any)[prop.name]}: <TextBox form={props.form} formProp={'${prop.name}'} /></div>`);
    }
    lines.push(`</div>
}`);
    return lines.join('\n') as any;
}