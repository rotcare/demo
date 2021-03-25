import { watch, Project } from '@rotcare/project';
import { buildBackend, buildFrontend } from '@rotcare/project-esbuild';
import * as fs from 'fs';

export async function build(projectDir: string) {
    const project = new Project(projectDir);
    watch(project, [
        async (project) => {
            const result = await buildBackend(project, '@motherboard/Main/backend');
            const bundledCode = result.outputFiles![0].text;
            if (!fs.existsSync('Main/backend.js') || fs.readFileSync('Main/backend.js').toString() !== bundledCode) {
                fs.writeFileSync('Main/backend.js', bundledCode);
            }
        },
        async (project) => {
            const result = await buildFrontend(project, '@motherboard/Main/frontend');
            const bundledCode = result.outputFiles![0].text;
            if (!fs.existsSync('Main/frontend.js') || fs.readFileSync('Main/frontend.js').toString() !== bundledCode) {
                fs.writeFileSync('Main/frontend.js', bundledCode);
            }
        },
    ]);
}

build(process.argv[2]);
