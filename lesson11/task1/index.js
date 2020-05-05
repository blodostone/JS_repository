// const splitText = (text, len) => {
//     const strArr = [];
//     let startPositon = 0;

//     if (typeof str !== 'string') {
//         return null;
//     }

//     while (true) {
//         let chunk = text.substr(startPositon, len);
//         if (chunk.length === 0) {
//             break;
//         }
//         if (chunk.length < len) {
//             chunk = chunk.concat('.'.repeat(len - chunk.length));
//         }
//         strArr.push(chunk);
//         start += len;
//     }

//     return strArr.join('\n');
//     // return strArr;
// }

// const result = splitText('abcdefg', 4);

// console.log(result);
//'abcdefg'




const splitText = (text, len = 10) => {

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

    if (typeof str !== 'string') {
        return null;
    }

    return result;
};
const result = splitText('abcdefg', 4)

// console.log(result)