import { Model } from "@rotcare/codegen";
import { WidgetClass } from "@rotcare/rx-core";

export function generateForm<T>(model: Model<T>, options: {
    [Property in keyof T]?: string 
}): WidgetClass {
    const lines = [
        `class extends rx.Widget {
    protected render() {
        return <div>`,
    ];
    for (const prop of model.properties) {
        lines.push(`<div>${(options as any)[prop.name]}: <input /></div>`);
    }
    lines.push(`</div>
}}`);
    return lines.join('\n') as any;
}