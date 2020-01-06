let duplicateLettersRemovedStr = function (str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== newStr[newStr.length - 1]) {
            newStr += str[i];
        }
    }

    console.log(`Aftre removing duplicate consecutive letters from the "${str}" we have "${newStr}".`);

};

duplicateLettersRemovedStr("rrrriiiinnngggiiiinnnnnng");
