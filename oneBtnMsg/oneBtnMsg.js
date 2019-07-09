let msgHowManyTimes = function (message) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        totalMsgTimes = 0;

    for (let i = 0; i < message.length; i++) {
        totalMsgTimes = totalMsgTimes + alphabets.indexOf(message[i]) + 1;
    }

    console.log(`In "${message}" total ${totalMsgTimes} times button is pressed.`);

};

msgHowManyTimes('javascript');
