const fs = require('fs');
const path = require('path');
const sourceDir = process.argv[2];
const targetFile = path.join(path.dirname(__dirname), process.argv[3]);

// 解析映射
const listFilePath = (path, pathRegular) => {
    // console.log(path);
    let filePaths = [];
    // 判断存不存在这个路径
    if(!fs.existsSync(path)) {
        // console.log(path);
        console.log(`[${path}] is not existed`);
        return filePaths;
    }
    const stat = fs.lstatSync(path);
    // 验证对象是不是目录
    if(stat.isDirectory()) {
        const files = fs.readdirSync(path);
        files.forEach(file => {
            // 递归
            const controllerPaths = listFilePath(`${path}/${file}`, pathRegular);
            filePaths = filePaths.concat(controllerPaths);
        });
    } else {
        if(pathRegular) {
            if(pathRegular.test(path)) {
                filePaths.push(path);
            }
        } else {
            filePaths.push(path);
        }
    }
    return filePaths;
};

// 获取所有组件路径
const componentsDirs = path.join(path.dirname(__dirname), sourceDir);
const componentsPathRegular = new RegExp('\\w+\\.vue$');
const componentsPaths = listFilePath(componentsDirs, componentsPathRegular);
const importData = [];
const initData = [];
const dirName = 'pages';
componentsPaths.forEach(paths => {
    const indexStart = paths.lastIndexOf(dirName) + dirName.length;
    const indexPoint = paths.lastIndexOf('.');
    // 文件名改小写开始
    // const lowIndexPoint = paths.lastIndexOf('/');
    // const filePathName = paths.substring(indexStart, lowIndexPoint + 1);
    // let filePathLastName = path.basename(paths, '.vue');
    // filePathLastName = filePathLastName.substring(0, 1).toLowerCase() + filePathLastName.substring(1);
    // const lastFilePath = filePathName + filePathLastName;
    // 文件名改小写结束
    const filePath = paths.substring(indexStart, indexPoint);
    // \会出错，转成_
    let componentName = filePath.replace(/\//g, '_');
    componentName = componentName.toLowerCase();
    // console.log(lastFilePath, filePath);
    if(filePath === '/home/Home') {
        importData.push(
            `import ${componentName} from '@/pages${filePath}';
    `);
        initData.push(
            `{
        path: '/',
        name: '${filePath}',
        component: ${componentName}
    }`);
    } else if(filePath === '/home/Login' || filePath === '/home/Register') {
        initData.push(
            `{
        path: '${filePath}',
        name: '${filePath}',
        component: resolve => require(['@/pages${filePath}'], resolve)
    }`);
    } else {
        initData.push(
            `{
        path: '${filePath}',
        name: '${filePath}',
        meta: {requireAuth: true},
        component: resolve => require(['@/pages${filePath}'], resolve)
    }`);
    }
});
fs.writeFileSync(targetFile, `${importData.join('')}
export default [
    ${initData.join(',\n    ')}
];`);
