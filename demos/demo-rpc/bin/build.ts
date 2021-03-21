import { watch, Project } from '@rotcare/project';
import { buildBackend, buildFrontend } from '@rotcare/project-esbuild';
import * as fs from 'fs';

export async function build(projectDir: string) {
    const project = new Project(projectDir);
    watch(project, [
        async (project) => {
            const result = await buildBackend(project);
            const bundledCode = result.outputFiles![0].text;
            if (fs.readFileSync('backend.js').toString() !== bundledCode) {
                fs.writeFileSync('backend.js', bundledCode);
            }
        },
        async (project) => {
            const result = await buildFrontend(project);
            const bundledCode = result.outputFiles![0].text;
            if (fs.readFileSync('frontend.js').toString() !== bundledCode) {
                fs.writeFileSync('frontend.js', bundledCode);
            }
        },
    ]);
}

build(process.argv[2]);
