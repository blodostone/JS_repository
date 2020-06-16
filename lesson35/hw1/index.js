// input: string;
// output: true = result / false = null;



export const parseUser = (string) => {
    try {
        JSON.parse(string);

    } catch (err) {
        return null
    }

    return JSON.parse(string)
}

const userObj = parseUser('{"name":"Doe"}')

// console.log(userObj);