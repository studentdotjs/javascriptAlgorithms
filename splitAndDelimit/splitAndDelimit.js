let splitAndDelimitStr = function (str, n, delimiter) {
    let newStr = "";

    for (let i = 0; i < str.length; i += n) {
        newStr += str.substr(i, n).concat(delimiter);
    }

    newStr = newStr.slice(0, newStr.length - 1);
    console.log(`After splitting the "${str}" into sub - strings of size ${n} and adding the "${delimiter}" between each of the pieces we have "${newStr}".`);

};

splitAndDelimitStr("javascript", 3, '$');
