import * as esbuild from 'esbuild';
import * as path from 'path';
import { Project } from '@rotcare/project';
import { esbuildPlugin } from '@rotcare/project-esbuild';

const project = new Project('.');

async function main() {
    const result = await esbuild.serve(
        {
            servedir: path.join(project.projectDir, 'Main'),
            port: 8080,
        },
        {
            sourcemap: 'inline',
            keepNames: true,
            bundle: true,
            entryPoints: ['@motherboard/Main/frontend'],
            platform: 'browser',
            target: 'es2020',
            outdir: path.join(project.projectDir, 'Main/js'),
            absWorkingDir: project.projectDir,
            define: { 'process.env.NODE_ENV': `"development"` },
            // 把 @motherboard/* 名字空间下的文件提供给 esbuild
            plugins: [esbuildPlugin(project)],
        },
    );
    console.log('serve @8080, this server will not watch for changes, manually restart required')
    await result.wait;
}

main();