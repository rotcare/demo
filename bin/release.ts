import * as path from 'path';
import * as childProcess from 'child_process';
import * as fs from 'fs';

const TO_RELEASE = process.env.TO_RELEASE;
if (!TO_RELEASE) {
    throw new Error('missing environment variable TO_RELEASE');
}

function main() {
    const packagePaths = process.argv.slice(2).map((p) => path.join(process.cwd(), p));
    for (const packagePath of packagePaths) {
        assertGitRepoClean(packagePath);
    }
    try {
        for (const packagePath of packagePaths) {
            createVersionTag(packagePath);
        }
    } catch (e) {
        console.error(e);
        console.error('delete version tags...');
        for (const packagePath of packagePaths) {
            rollbackWorkspace(packagePath);
        }
        return;
    }
    for (const packagePath of packagePaths) {
        releaseVersion(packagePath);
    }
}

function releaseVersion(packagePath: string) {
    const e = exec.bind(undefined, packagePath);
    e(`git checkout v${TO_RELEASE}`);
    e('git push --tags');
    e('npm publish --access public');
    e(`git checkout main`);
}

function rollbackWorkspace(packagePath: string) {
    try {
        childProcess.execSync(`git tag -d v${TO_RELEASE}`, { cwd: packagePath, stdio: 'ignore' });
    } catch (e) {
        // ignore
    }
    exec(packagePath, 'git reset --hard HEAD');
    exec(packagePath, 'git checkout main');
}

function createVersionTag(packagePath: string) {
    const e = exec.bind(undefined, packagePath);
    e('npm whoami');
    e('git pull --tags');
    try {
        e('git checkout -b release');
        e('yarn release');
        const packageJsonPath = path.join(packagePath, 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath).toString());
        packageJson.version = TO_RELEASE;
        packageJson.main = 'lib/index.js';
        packageJson.typings = 'lib/index.d.ts';
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, undefined, '  '));
        e(`git commit -a -m "releae ${TO_RELEASE}"`);
        e(`git tag v${TO_RELEASE}`);
    } finally {
        e('git checkout main');
        e('git branch -D release');
    }
}

function assertGitRepoClean(packagePath: string) {
    const e = execAndGetStdout.bind(undefined, packagePath);
    if (e('git branch --show-current').trim() !== 'main') {
        throw new Error('expect on main branch');
    }
    if (e('git status --porcelain') !== '') {
        throw new Error('expect working directory clean');
    }
}

function exec(cwd: string, command: string) {
    console.log(command);
    childProcess.execSync(command, {
        cwd,
        stdio: 'inherit',
        env: { ...process.env, npm_config_registry: '' },
    });
}

function execAndGetStdout(cwd: string, command: string) {
    console.log(command);
    return childProcess
        .execSync(command, { cwd, env: { ...process.env, npm_config_registry: '' } })
        .toString();
}

main();
