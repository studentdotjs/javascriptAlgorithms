let isIdenticalOrNot = function (str) {
    let char = str[0],
        i = null;

    for (i = 0; i < str.length; i++) {
        if (str[i] !== char) {
            console.log(false);
            break;
        }
    }

    if (i === str.length) {
        console.log(true);
    }

};

isIdenticalOrNot("nnnnnnn");
