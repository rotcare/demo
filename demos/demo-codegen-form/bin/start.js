const esbuild = require('esbuild');
const path = require('path');
const { Project, esbuildPlugin, buildModels } = require('@rotcare/project');

const project = new Project('.');

async function main() {
    project.toBuild.add('frontend');
    // 预先完成所有的构建，结果缓存在 project 对象上
    await buildModels({ project });
    const result = await esbuild.serve(
        {
            servedir: project.projectDir,
            port: 8080,
        },
        {
            sourcemap: 'inline',
            keepNames: true,
            bundle: true,
            entryPoints: ['@motherboard/frontend'],
            platform: 'browser',
            target: 'es2020',
            outdir: path.join(project.projectDir, 'js'),
            absWorkingDir: project.projectDir,
            define: { 'process.env.NODE_ENV': `"development"` },
            // 把预构建的 @motherboard/* 名字空间下的文件提供给 esbuild
            plugins: [esbuildPlugin({ project })],
        },
    );
    console.log('serve @8080, this server will not watch for changes, manually restart required')
    await result.wait;
}

main();