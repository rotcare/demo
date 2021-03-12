import { ActiveRecord, toQuery } from '@rotcare/active-record';
import { Rack } from './Rack';

export class Library extends ActiveRecord {
    public static queryLibrary = toQuery(Library).fetch(Library, 'racks');
    public name: string;
    public publicTransportation: string;
    public racks = this.hasMany(Rack);
}