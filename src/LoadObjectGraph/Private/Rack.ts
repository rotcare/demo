import { ActiveRecord } from '@rotcare/active-record';
import { Book } from './Book';

export class Rack extends ActiveRecord {
    public libraryId: string;
    public rackIndex: string;
    public books = this.hasMany(Book);
}
