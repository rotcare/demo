import * as React from 'react';
import { Suspense } from 'react';
import { Scene } from '@rotcare/io';
import { Widget } from '@rotcare/rx-core';
import type { Library } from '../../Private/LoadObjectGraph/Library';
import { renderWidget } from '@rotcare/rx-react';

function $(scene: Scene) {
    return scene.useServices<typeof Library>('Main');
}

export class LoadObjectGraph extends Widget {
    protected render() {
        return (
            <Suspense fallback={<span>loading...</span>}>{renderWidget(LibraryListView)}</Suspense>
        );
    }
}

class LibraryListView extends Widget {
    private libraries = this.subscribe(async (scene) => {
        return await $(scene).queryLibrary({});
    });
    protected render() {
        return (
            <ul>
                {this.libraries.map((library) => (
                    <li key={String(library.id)}>
                        {library.name}
                        <ul>
                            {library.racks.map((rack) => (
                                <li key={String(rack.id)}>
                                    {rack.rackIndex}
                                    <ul>
                                        {rack.books.map((book) => (
                                            <li key={String(book.id)}>{book.name} 作者：{book.author}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        );
    }
}
