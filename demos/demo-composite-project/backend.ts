import * as http from 'http';

new http.Server((req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // CORS 有一个预检
    if (req.method === 'OPTIONS') {
        resp.setHeader('Access-Control-Allow-Headers', '*');
        resp.end('');
        return;
    }
    console.log('hello');
}).listen(3000);