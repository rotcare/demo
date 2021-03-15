import { ActiveRecord } from "@rotcare/active-record";

export class Book extends ActiveRecord {
    public rackId: string;
    public name: string;
    public author: string;
}