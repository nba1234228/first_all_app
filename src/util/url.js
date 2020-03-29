const trim = str => {
    return !str ? '' : str.replace(/(^\s*)|(\s*$)|( )/g, '');
};
const getStrBefore = (str, c) => {
    if(!str) { return ''; }
    if(!c) { return str; }
    const index = str.indexOf(c);
    return index > -1 ? str.substring(0, index) : str;
};
const getStrAfter = (str, c) => {
    if(!str) { return ''; }
    if(!c) { return str; }
    const index = str.indexOf(c);
    return index > -1 ? str.substring(index + 1) : str;
};
const parseSearchStrToObj = searchStr => {
    if(!searchStr) { return {}; }
    const obj = {};
    const arr = searchStr.split('&');
    for(const i in arr) {
        // const index = arr[i].indexOf('=');
        const key = trim(getStrBefore(arr[i], '='));
        if(!key) {
            continue;
        }
        obj[key] = trim(window.decodeURIComponent(getStrAfter(arr[i], '=')));
    }
    return obj;
};
const collectSearchHashParam = () => {
    const searchObj = parseSearchStrToObj(window.location.search.substring(1));
    const hash = window.location.hash;
    const hashPoint = hash.indexOf('?');
    const hashStr = hashPoint > -1 ? hash.substring(hashPoint + 1) : '';
    const hashObj = parseSearchStrToObj(hashStr);
    return Object.assign({}, searchObj, hashObj);
};
export default {
    getStrBefore,
    getStrAfter,
    parseSearchStrToObj,
    collectSearchHashParam
};
