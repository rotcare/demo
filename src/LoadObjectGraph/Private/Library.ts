import { ActiveRecord, toQuery } from '@rotcare/active-record';
import { Rack } from './Rack';

export class Library extends ActiveRecord {
    public static queryLibrary = toQuery(Library).fetch(Library, 'racks').fetch(Rack, 'books');
    public name: string;
    public address: string;
    public racks = this.hasMany(Rack);
}
