const format = (str, obj) => {
    if(!str || !obj) {
        return '';
    }
    let result = str;
    for(const key in obj) {
        result = result.replace(new RegExp(`({${key})}`, 'g'), obj[key]);
    }
    return result;
};
export default format;
