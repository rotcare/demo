import { Scene } from '@rotcare/io';
import { Book } from './Private/LoadObjectGraph/Book';
import { Library } from './Private/LoadObjectGraph/Library';
import { Rack } from './Private/LoadObjectGraph/Rack';

const libraryRecords: Partial<Library>[] = [
    {
        id: 'library-1',
        name: '中国国家图书馆',
        address: '中关村南大街33号',
    },
    {
        id: 'library-2',
        name: '首都图书馆',
        address: '朝阳区东南三环华威桥',
    },
];

const rackRecords: Partial<Rack>[] = [
    {
        id: 'rack-1',
        libraryId: 'library-1',
        rackIndex: 'NLC-GCZM-1',
    },
];

const bookRecords: Partial<Book>[] = [
    {
        id: 'book-1',
        rackId: 'rack-1',
        name: '花鸟养殖技术',
        author: '刘半民',
    },
];

export async function migrate(scene: Scene) {
    for (const record of libraryRecords) {
        await scene.create(Library, record);
    }
    for (const record of rackRecords) {
        await scene.create(Rack, record);
    }
    for (const record of bookRecords) {
        await scene.create(Book, record);
    }
}
