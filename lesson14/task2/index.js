const createMesseger = () => {
    let sender = 'Gromcode';
    let message = 'Just learn it!';

    function sendMessage(name) {


        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(string) {
        sender = string;
    }


    return {
        sendMessage,
        setMessage,
        setSender
    };
};
export default createMesseger;

const messenger1 = createMesseger();

messenger1.sendMessage('Bob');

let str1 = 'Hello!';
let bold1 = str1.bold();

const messenger2 = createMesseger();

messenger2.setMessage(bold1);

let str2 = 'Gromcode';
let bold2 = str2.bold();

const messenger3 = createMesseger();

messenger3.setSender(bold2);

messenger1.sendMessage('Bob');