const splitString = (text, len = 10) => {
    if (typeof text !== 'string') {
        return null;
    }

    const strArr = [];
    let startPositon = 0;

    while (true) {
        let chunk = text.substr(startPositon, len);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < len) {
            chunk = chunk.concat('.'.repeat(len - chunk.length));
        }
        strArr.push(chunk);
        startPositon += len;
    }
    return strArr;
};

const result = splitString('somethig in the text', 6)

console.log(result)