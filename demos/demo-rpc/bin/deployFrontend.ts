import * as esbuild from 'esbuild';
import { Project } from '@rotcare/project';
import { esbuildPlugin } from '@rotcare/project-esbuild';

let result: esbuild.BuildIncremental;

export async function deployFrontend(project: Project) {
    if (result) {
        result = await result.rebuild();
    } else {
        result = await (esbuild.build({
            sourcemap: 'inline',
            keepNames: true,
            bundle: true,
            entryPoints: ['@motherboard/frontend'],
            write: false,
            platform: 'browser',
            target: 'es2020',
            absWorkingDir: project.projectDir,
            define: { 'process.env.NODE_ENV': `"development"` },
            plugins: [esbuildPlugin({ project })],
            incremental: true,
        }) as Promise<esbuild.BuildIncremental>);
    }
}
