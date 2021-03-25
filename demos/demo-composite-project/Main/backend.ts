import * as http from 'http';
import { codegen, Model } from '@rotcare/codegen';

// 用代码生成的方式生成路由代码，避免在这里手工 require 每一个后端的 RPC 方法
const routes = codegen<Record<string, () => void>>((...models: Model[]) => {
    const lines = [`const routes={}`];
    for (const model of models) {
        if (model.qualifiedName.includes('/Private/') || model.qualifiedName.includes('/Public/')) {
            lines.push(`routes['/${model.tableName}'] = () => new (require('@motherboard/${model.qualifiedName}').${model.tableName})().run()`);
        }
    }
    lines.push('return routes')
    return lines.join('\n') as any;
})

new http.Server((req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // CORS 有一个预检
    if (req.method === 'OPTIONS') {
        resp.setHeader('Access-Control-Allow-Headers', '*');
        resp.end('');
        return;
    }
    routes[req.url!]();
    resp.end();
    return;
}).listen(3000);