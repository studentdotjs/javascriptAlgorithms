let repeatShorterStr = function (str1, str2) {
    let newStr = null;

    if (str1.length > str2.length) {
        newStr = str2.padEnd(str1.length, str2);
        console.log(`After converting shorter string "${str2}" length equal to the length of "${str1}" we have "${newStr}".`);
    } else {
        newStr = str1.padEnd(str2.length, str1);
        console.log(`After converting shorter string "${str1}" length equal to the length of "${str2}" we have "${newStr}".`);
    }

};

repeatShorterStr("JavaScript", "JS");
