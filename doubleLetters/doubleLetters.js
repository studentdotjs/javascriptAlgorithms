let doubleLettersOrNot = function (str) {
    let i = null;

    for (i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            console.log(`${true}, "${str}" has 2 consecutive identical letters, which is "${str[i]}".`);
            break;
        }
    }

    if (i === str.length) {
        console.log(`${false}, "${str}" has not any consecutive identical letters.`);
    }

};

doubleLettersOrNot("keep");
