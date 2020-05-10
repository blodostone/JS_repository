const createMessenger = () => {
    let sender = 'GromCode';
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
        setSender,
    };
};

export default createMessenger;

const messenger1 = createMessenger();

messenger1.sendMessage('Bob');

let str = 'Good job';
let bold1 = str.bold();

const messenger2 = createMessenger();

messenger2.setMessage(bold1);

let str2 = 'GromCode';
let bold2 = str2.bold();

const messenger3 = createMessenger();

messenger3.setSender(bold2);


// function createMessenger() {
//     let sender = 'GromCode';
//     let message = 'Just learn it';

//     function sendMessage(name) {


//         console.log(`${name}, ${message}! Your ${sender}`);
//     }

//     function setMessage(text) {
//         message = text;

//     }

//     function setSender(string) {
//         sender = string;

//     }



//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     };
// };


// export default createMessenger;

messenger1.sendMessage('Bob');