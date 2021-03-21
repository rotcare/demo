import { watch, Project } from '@rotcare/project';
import { deployBackend } from './deployBackend';
import { deployFrontend } from './deployFrontend';

export async function deploy(projectDir: string) {
    const project = new Project(projectDir);
    watch(project, [deployBackend, deployFrontend]);
}

deploy(process.argv[2]);
