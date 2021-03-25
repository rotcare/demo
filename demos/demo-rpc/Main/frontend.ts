import { renderRootWidget } from '@rotcare/rx-react';
import { HomePage } from './Ui/HomePage';
import { InMemDatabase, Scene } from '@rotcare/io';
import { HttpRpcClient } from '@rotcare/io-http-rpc';
import { ActiveRecord } from '@rotcare/active-record';

Scene.serviceDiscover = (options) => {
    return { host: 'localhost', port: 3000 }
}
renderRootWidget(HomePage, {
    serviceProtocol: new HttpRpcClient({ decode: ActiveRecord.decode }),
    database: new InMemDatabase(),
});