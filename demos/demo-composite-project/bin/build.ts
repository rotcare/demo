import { Project } from '@rotcare/project';
import { esbuildPlugin } from '@rotcare/project-esbuild';
import * as fs from 'fs';
import * as esbuild from 'esbuild';
async function main() {
    const project = new Project('.');
    fs.writeFileSync(
        'Main/frontend.js',
        (
            await esbuild.build({
                sourcemap: 'inline',
                keepNames: true,
                bundle: true,
                entryPoints: ['@motherboard/Main/frontend'],
                write: false,
                platform: 'browser',
                target: 'es2020',
                absWorkingDir: project.projectDir,
                define: { 'process.env.NODE_ENV': `"development"` },
                plugins: [esbuildPlugin(project)],
            })
        ).outputFiles![0].text,
    );
    fs.writeFileSync(
        'Main/backend.js',
        (
            await esbuild.build({
                sourcemap: 'inline',
                keepNames: true,
                bundle: true,
                entryPoints: ['@motherboard/Main/backend'],
                platform: 'node',
                format: 'cjs',
                write: false,
                absWorkingDir: project.projectDir,
                plugins: [esbuildPlugin(project)],
            })
        ).outputFiles![0].text,
    );
}

main();
