import { Scene } from '@rotcare/io';
import { Library } from './LoadObjectGraph/Private/Library';

const libraryRecords = [
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

export class Migrate {
    public static async migrate(scene: Scene) {
        for (const record of libraryRecords) {
            await scene.insert(Library, record);
        }
    }
}
