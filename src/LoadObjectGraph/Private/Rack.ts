import { ActiveRecord, toCreate } from '@rotcare/active-record';
import { Book } from './Book';

export class Rack extends ActiveRecord {
    public static readonly createRack = toCreate(Rack);
    public libraryId: string;
    public rackIndex: string;
    public readonly books = this.hasMany(Book);
}
