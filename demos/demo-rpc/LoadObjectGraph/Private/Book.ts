import { ActiveRecord, toCreate } from "@rotcare/active-record";

export class Book extends ActiveRecord {
    public static readonly createBook = toCreate(Book);
    public rackId: string;
    public name: string;
    public author: string;
}