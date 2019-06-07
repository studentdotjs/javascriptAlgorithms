let firstAndLastIndex = function (str, char) {
    let splitStr = null,
        firstAndLastIndexArr = [],
        i = 0;
    splitStr = str.split("");

    do {
        firstAndLastIndexArr[i] = splitStr.indexOf(char);
        i++;
        firstAndLastIndexArr[i] = splitStr.lastIndexOf(char);
        break;
    } while (true);

    if (firstAndLastIndexArr[i] === -1) {
        firstAndLastIndexArr = undefined;
        console.log(`${char}' is not exist in '${str}' so we have ${undefined}.`);
    } else {
        console.log(`First and Last Index number of '${char}' in '${str}' is [${firstAndLastIndexArr}].`);
    }

};

firstAndLastIndex('cricket', 'c');
