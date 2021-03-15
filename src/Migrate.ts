import { Scene } from '@rotcare/io';
import { Book } from './LoadObjectGraph/Private/Book';
import { Library } from './LoadObjectGraph/Private/Library';
import { Rack } from './LoadObjectGraph/Private/Rack';

const libraryRecords: Partial<Library>[] = [
    {
        "id": "library-1",
        "name": "中国国家图书馆",
        "address": "中关村南大街33号"
    },
    {
        "id": "library-2",
        "name": "首都图书馆",
        "address": "朝阳区东南三环华威桥"
    }
]

const rackRecords: Partial<Rack>[] = [
    {
        "id": "rack-1",
        "libraryId": "library-1",
        "rackIndex": "NLC-GCZM-1"
    }
]

const bookRecords: Partial<Book>[] = [
    {
        "id": "book-1",
        "rackId": "rack-1",
        "name": "花鸟养殖技术",
        "author": "刘半民"
    }
]

export class Migrate {
    public static async migrate(scene: Scene) {
        for (const record of libraryRecords) {
            await scene.insert(Library, record);
        }
        for (const record of rackRecords) {
            await scene.insert(Rack, record);
        }
        for (const record of bookRecords) {
            await scene.insert(Book, record);
        }
    }
}
