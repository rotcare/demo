import { ActiveRecord } from "@rotcare/active-record";

export class Enrollment extends ActiveRecord {
    public studentName: string;
    public studentAge: number;
    public course: string;
}