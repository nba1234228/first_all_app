const fs = require('fs');
const path = require('path');
const sourceDir = path.join(path.dirname(__dirname), process.argv[2]);
const targetFile = path.join(path.dirname(__dirname), process.argv[3]);

// 模块化vuex
// 验证路径存不存在
if(!fs.existsSync(sourceDir)) {
    console.log(`[${sourceDir}] is not existed`);
    return false;
}
// 验证对象是不是目录
if(!fs.lstatSync(sourceDir).isDirectory()) {
    console.log(`[${sourceDir}] is not directory`);
    return false;
}
// 获取目录下的所有文件
const moduleDirs = fs.readdirSync(sourceDir);
moduleDirs.forEach(moduleDir => {
    if(moduleDir === 'store.js' || moduleDir.indexOf('.') >= 0) {
        console.log(`[${moduleDir}] skip`);
        return false;
    }
    // 获取当前模块的路径
    const moduleDirPath = path.join(sourceDir, moduleDir);
    // 获取当前模块路径的实例对象
    const stat = fs.lstatSync(moduleDirPath);
    // 验证对象是不是目录
    if(!stat.isDirectory()) {
        console.log(`[${moduleDirPath}] is not directory`);
        return false;
    }
    const files = fs.readdirSync(moduleDirPath);
    const moduleFile = path.join(moduleDirPath, 'index.js');
    const importData = [];
    const initData = ['namespaced: true'];
    files.forEach(file => {
        // 提取出用'/'隔开的path的最后一部分，‘.js’为过滤字符
        const fileName = path.basename(file, '.js');
        if(fileName === 'index') {
            return false;
        }
        importData.push(`import ${fileName} from './${fileName}';`);
        initData.push(fileName);
    });
    fs.writeFileSync(moduleFile, `${importData.join('\n')}
    
export default {
    ${initData.join(',\n    ')}
}`);
});

// 生成全量vuex
const moduleImport = [];
const moduleInit = [];
moduleImport.push(
    `import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

`);
// 获取targetFile的绝对路径
const targetDir = path.dirname(targetFile);
// path.relative用于将绝对路径转为相对路径
const relativeDir = path.relative(targetDir, sourceDir);
moduleDirs.forEach(moduleDir => {
    if(moduleDir === 'store.js' || moduleDir.indexOf('.') >= 0) {
        console.log(`[${moduleDir}] skip`);
        return false;
    }
    const relativePath = path.join(relativeDir, moduleDir);
    // path.sep 返回各平台的路径分隔符
    moduleImport.push(`import ${moduleDir} from '${relativePath.split(path.sep).join('/')}';`);
    moduleInit.push(moduleDir);
});
fs.writeFileSync(targetFile, `${moduleImport.join('')}

export default new Vuex.Store({
    modules: {
        ${moduleInit.join(',')}
    }
});`);
