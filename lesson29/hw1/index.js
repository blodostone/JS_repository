//create function requestUserData (userId, callback)
//create obj 
//callback with first error ( put some text )
//call callback



const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }

    const user = { userId: `${userId}`, email: `${userId}@example.com` };
    // setInterval(() => callback(user), randomElem);
    // let randomElem = parseInt(Math.random()

    setTimeout(() => callback(user), Math.ceil(Math.random() * 3 * 1000));

}


// requestUserData('broken');