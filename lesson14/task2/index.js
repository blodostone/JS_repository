let message = 'Just learn it';

const createMessenger = () => {

    function sendMessage(name) {
        const sender = 'GromCode';

        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text + '!';
    }

    function setSender(string, bold) {
        message = string;
        sender = bold;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

// const messanger1 = createMessenger();

// messanger1.sendMessage('Bob');

// const messanger2 = createMessenger();

// messanger2.setMessage('Good job'.bold());
// messanger1.sendMessage('Bob');

// const messanger3 = createMessenger();

// messanger3.setSender('Just learn it');
// messanger1.sendMessage('Bob');

// export default createMessenger;