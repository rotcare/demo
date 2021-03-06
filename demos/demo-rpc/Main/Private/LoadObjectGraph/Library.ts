import { ActiveRecord, toQuery, toCreate } from '@rotcare/active-record';
import { MAIN_RPOJECT } from '../../MAIN_PROJECT';
import { Rack } from './Rack';

export class Library extends ActiveRecord {
    public static project = MAIN_RPOJECT;
    // public static method 默认会用 RPC 暴露出去
    public static readonly createLibrary = toCreate(Library);
    // 注意这两个 fetch 的声明，会在 queryLibrary 的时候，同时把 racks 和 books 也一起获取了返回给前端
    public static readonly queryLibrary = toQuery(Library).fetch(Library, 'racks').fetch(Rack, 'books');
    public name: string;
    public address: string;
    // 如果没有 fetch 声明，关联关系是没有值的，也就是读到的是 undefined
    public readonly racks = this.hasMany(Rack);
}
