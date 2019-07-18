let firstStrNVowels = function (str, n) {
    let strSplit = str.split(""),
        vowels = ['a', 'e', 'i', 'o', 'u'],
        totalVowels = 0,
        vowelStr = "";

    for (let i = 0; i < strSplit.length; i++) {
        if (vowels.includes(strSplit[i])) {
            vowelStr += strSplit[i];
            totalVowels++;
        }
    }

    if (n <= totalVowels) {
        vowelStr = vowelStr.slice(0, n);
        console.log(`First ${n} vowels of "${str}" are "${vowelStr}".`);
    } else {
        console.log(`"${str}" does not have ${n} vowels, so this is a "Invalid Input".`);
    }

};

firstStrNVowels("javascript", 3);
