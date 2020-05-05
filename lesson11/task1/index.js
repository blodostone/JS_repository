const splitText = (text, len) => {
    const strArr = [];
    let startPositon = 0;
    if (typeof text !== 'string') {
        return null;
    }

    while (true) {
        let chunk = text.substr(startPositon, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPositon += len;
    }

    return strArr.join('\n');
}

const result = splitText('abcdefg', 4);

// console.log(result);
//'abcdefg'