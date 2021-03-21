import * as esbuild from 'esbuild';
import { Project } from '@rotcare/project';
import * as fs from 'fs';
import { esbuildPlugin } from '@rotcare/project-esbuild';

let result: esbuild.BuildIncremental;

export async function deployBackend(project: Project) {
    if (result) {
        result = await result.rebuild();
    } else {
        result = await (esbuild.build({
            sourcemap: 'inline',
            keepNames: true,
            bundle: true,
            entryPoints: ['@motherboard/backend'],
            platform: 'node',
            format: 'cjs',
            write: false,
            absWorkingDir: project.projectDir,
            plugins: [esbuildPlugin({ project })],
            incremental: true,
        }) as Promise<esbuild.BuildIncremental>);
    }
    const bundledCode = result.outputFiles![0].text;
    fs.writeFileSync('backend.js', bundledCode);
}
