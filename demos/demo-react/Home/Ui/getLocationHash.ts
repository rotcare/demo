import { bindCallback, ref } from '@rotcare/rx-core';

const hash = ref(window.location.hash);

window.addEventListener(
    'hashchange',
    bindCallback('window hashchange', (scene) => {
        hash.set(window.location.hash, scene);
    }),
);

export function getLocationHash() {
    return hash.get();
}
